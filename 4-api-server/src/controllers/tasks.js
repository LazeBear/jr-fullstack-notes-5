const Task = require('../models/task');

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: Object
 *      required:
 *        - description
 *      properties:
 *        id:
 *          type: string
 *          description: auto generated unique identifier
 *        description:
 *          type: string
 *          description: description of the task
 *        done:
 *          type: boolean
 *          description: status of the task
 *      example:
 *        id: 1
 *        description: task 1
 *        done: false
 *
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: return all tasks
 *    tags: [Tasks]
 *    parameters:
 *      - name: description
 *        in: query
 *        description: filter tasks by description
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: array of tasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 *
 */
function getAllTasks(req, res) {
  const { description } = req.query;
  const data = Task.getAllTasks({ description });
  res.json(data);
}

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Get task by id
 *    tags: [Tasks]
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: task id
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: task
 *        content:
 *          application/json:
 *            schema:
 *              schema:
 *                $ref: '#/components/schemas/Task'
 *      404:
 *        description: task not found
 *
 */
function getTaskById(req, res) {
  const { id } = req.params;
  const task = Task.getTaskById(id);
  // if (!task) {
  //   return res.status(404).json({ error: 'task not found' });
  // }
  res.json(task);
}

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Update task by id
 *    tags: [Tasks]
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: task id
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: task updated
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/Task'
 *      404:
 *        description: task not found
 *
 */
function updateTaskById(req, res) {
  const { done, description } = req.body;
  const { id } = req.params;

  const task = Task.updateTaskById(id, { description, done });

  res.json(task);
}

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: delete task by id
 *    tags: [Tasks]
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: task id
 *        schema:
 *          type: string
 *    responses:
 *      204:
 *        description: task updated
 *      404:
 *        description: task not found
 *
 */
function deleteTaskById(req, res) {
  const { id } = req.params;
  Task.deleteTaskById(id);
  res.sendStatus(204);
}

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Update task by id
 *    tags: [Tasks]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      201:
 *        description: task updated
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *      404:
 *        description: task not found
 *
 */
function createTask(req, res) {
  const { description } = req.body;
  if (!description) {
    return res.status(400).json({
      error: 'You must provide a description',
    });
  }
  const task = Task.addTask({ description });

  res.status(201).json(task);
}

module.exports = {
  getAllTasks,
  getTaskById,
  updateTaskById,
  createTask,
  deleteTaskById,
};
