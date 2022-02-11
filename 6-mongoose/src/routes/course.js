const express = require('express');
const {
  getAllCourses,
  addCourse,
  getCourseById,
  updateCourseById,
  deleteCourseById,
} = require('../controllers/course');
// const { Router } = require('express');

const courseRouter = express.Router();

courseRouter.get('', getAllCourses);
courseRouter.post('', addCourse);
courseRouter.get('/:id', getCourseById);
courseRouter.put('/:id', updateCourseById);
courseRouter.delete('/:id', deleteCourseById);

module.exports = courseRouter;
