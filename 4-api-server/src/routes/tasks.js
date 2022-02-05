const express = require('express');
const {
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  createTask,
} = require('../controllers/tasks');
const checkTaskExist = require('../middleware/checkTaskExist');
const parseId = require('../middleware/parseId');

const taskRouter = express.Router();

// /v1/tasks
// /v1/books
taskRouter.get('', getAllTasks);
taskRouter.get('/:id', parseId, checkTaskExist, getTaskById);
taskRouter.put('/:id', parseId, checkTaskExist, updateTaskById);
taskRouter.delete('/:id', parseId, checkTaskExist, deleteTaskById);
taskRouter.post('', createTask);

module.exports = taskRouter;
