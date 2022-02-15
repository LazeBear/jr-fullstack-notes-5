const Course = require('../models/course');
const Joi = require('joi');

// const obj = {
//   add(newB) {
//     this.a = this.sum();
//     this.b = newB;
//     return this;
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   a: 1,
//   b: 2,
// }

// obj.add(2).add(2).add(5).sum();

async function getAllCourses(req, res) {
  // db.courses.find()
  // query chain
  // Course.find().sort().limit()
  // limit/skip
  const courses = await Course.find().exec();
  res.json(courses);
}

async function getCourseById(req, res) {
  const { id } = req.params;
  // await Course.find({ _id: id });
  const course = await Course.findById(id).exec();
  if (!course) {
    return res.status(404).json({
      error: 'course not found',
    });
  }
  res.json(course);
}

async function addCourse(req, res) {
  // const { code, name, description } = req.body;
  const schema = Joi.object({
    name: Joi.string().required(),
    // 必须以字母开头，以数字结尾
    // COMP1001, NODE1001
    code: Joi.string()
      .regex(/^[a-zA-Z]+[0-9]+$/)
      .required(),
    description: Joi.string(),
  });
  const { code, name, description } = await schema.validateAsync(req.body, {
    allowUnknown: true,
    stripUnknown: true,
  });
  // check code uniqueness
  const course = new Course({ code, name, description });
  await course.save();
  res.status(201).json(course);
}

async function updateCourseById(req, res) {
  const { id } = req.params;
  const { name, description } = req.body;
  const course = await Course.findByIdAndUpdate(
    id,
    {
      name,
      description,
    },
    { new: true }
  ).exec();
  // const course = await Course.findById(id);
  // // update
  // course.save();
  if (!course) {
    return res.status(404).json({
      error: 'course not found',
    });
  }
  res.json(course);
}

async function deleteCourseById(req, res) {
  const { id } = req.params;
  const course = await Course.findByIdAndDelete(id).exec();
  if (!course) {
    return res.status(404).json({
      error: 'course not found',
    });
  }
  // delete student reference
  res.sendStatus(204);
}

module.exports = {
  getAllCourses,
  getCourseById,
  addCourse,
  updateCourseById,
  deleteCourseById,
};
