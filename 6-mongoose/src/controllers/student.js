const Student = require('../models/student');

async function getAllStudents(req, res) {
  const students = await Student.find().exec();
  res.json(students);
}

async function getStudentById(req, res) {
  const { id } = req.params;
  const student = await Student.findById(id).exec();
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
  try {
    await student.save();
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
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
  res.sendStatus(204);
}

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById,
};
