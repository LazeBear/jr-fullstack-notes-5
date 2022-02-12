const Student = require('../models/student');
const Course = require('../models/course');

// // high order function
// // high order component
// // currying function
// function tryCatch(routeHandler) {
//   return async (req, res, next) => {
//     try {
//       await routeHandler(req, res, next);
//     } catch (e) {
//       next(e);
//     }
//   }
// }

// tryCatch(addStudent);

async function getAllStudents(req, res) {
  const students = await Student.find().exec();
  res.json(students);
}

async function getStudentById(req, res) {
  const { id } = req.params;
  // const { fields } = req.query;
  const student = await Student.findById(id)
    // .select('')
    .populate('courses', 'name description -_id')
    // .populate('teachers')
    .exec();
  if (!student) {
    return res.status(404).json({
      error: 'Student not found',
    });
  }
  res.json(student);
}

async function addStudent(req, res) {
  const { firstName, lastName, email } = req.body;
  const student = new Student({ firstName, lastName, email });
  // Student.find((error, result) => {
  //   if (error) {
  //     console.log(e);
  //     return res.send(e);
  //   }
  //   // handle result
  // });
  // student.save().then().catch(e => {
  //   console.log(e);
  //   return res.send(e);
  // })
  // try {
  await student.save();
  // } catch (e) {
  // console.log(e);
  // return res.send(e);
  // next(e);
  // res.status(409).json({error: "duplicate id"})
  // }
  res.status(201).json(student);
}

async function updateStudentById(req, res) {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  const student = await Student.findByIdAndUpdate(
    id,
    {
      firstName,
      lastName,
      email,
    },
    { new: true }
  ).exec();
  if (!student) {
    return res.status(404).json({
      error: 'Student not found',
    });
  }
  res.json(student);
}

async function deleteStudentById(req, res) {
  const { id } = req.params;
  const student = await Student.findByIdAndDelete(id).exec();
  if (!student) {
    return res.status(404).json({
      error: 'Student not found',
    });
  }
  await Course.updateMany(
    { students: student._id },
    {
      $pull: {
        students: student._id,
      },
    }
  ).exec();
  res.sendStatus(204);
}

// POST /v1/students/:id/courses/:code
async function addCourseToStudent(req, res) {
  const { id, code } = req.params;
  const student = await Student.findById(id).exec();
  const course = await Course.findById(code).exec();

  if (!student || !course) {
    return res.sendStatus(404);
  }
  // student.courses.push
  student.courses.addToSet(course._id);
  course.students.addToSet(student._id);

  await student.save();
  await course.save();

  return res.json(student);
}

async function removeCourseToStudent(req, res) {
  const { id, code } = req.params;
  const student = await Student.findById(id).exec();
  const course = await Course.findById(code).exec();

  if (!student || !course) {
    return res.sendStatus(404);
  }
  // student.courses.push
  student.courses.pull(course._id);
  course.students.pull(student._id);

  await student.save();
  await course.save();

  return res.json(student);
}

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById,
  addCourseToStudent,
  removeCourseToStudent,
};
