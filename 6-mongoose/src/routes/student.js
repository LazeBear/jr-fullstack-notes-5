const express = require('express');
const {
  getAllStudents,
  addStudent,
  getStudentById,
  updateStudentById,
  deleteStudentById,
} = require('../controllers/student');
// const { Router } = require('express');

const studentRouter = express.Router();

studentRouter.get('', getAllStudents);
studentRouter.post('', addStudent);
studentRouter.get('/:id', getStudentById);
studentRouter.put('/:id', updateStudentById);
studentRouter.delete('/:id', deleteStudentById);

module.exports = studentRouter;
