const express = require('express');
const {
  getAllStudents,
  addStudent,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  addCourseToStudent,
  removeCourseToStudent,
} = require('../controllers/student');
// const { Router } = require('express');

const studentRouter = express.Router();

studentRouter.get('', getAllStudents);
// tryCatch(addStudent);
studentRouter.post('', addStudent);
studentRouter.get('/:id', getStudentById);
studentRouter.put('/:id', updateStudentById);
studentRouter.delete('/:id', deleteStudentById);
studentRouter.post('/:id/courses/:code', addCourseToStudent);
studentRouter.delete('/:id/courses/:code', removeCourseToStudent);

module.exports = studentRouter;
