const express = require('express');
const app = express();

app.use(express.json());
app.use(cors);

// taskArray
// tasks

// const generateId = () => {
//   const maxId = data.length > 0 ? data[data.length - 1].id : 0;
//   return maxId + 1;
// };

app.get('/tasks', (req, res) => {
  const { description } = req.query;

  res.json(data);
});

/**
 * {
 *  error: 'xxx',
 *  data: {} | []
 * }
 */

/**
 * {
 *  id:1,
 *  description:xxx
 * }
 */
app.get('/tasks/:id', (req, res) => {
  const { id } = req.params;
  // const id = Number(req.params.id);
  const task = data.find((task) => task.id === Number(id));
  // if (task) {
  //   res.json(task);
  // }
  // res.status(404).end();
  if (!task) {
    return res.status(404).json({ error: 'task not found' });
    // return;
  }
  res.json(task);
});

app.post('/tasks', (req, res) => {
  const { description, done } = req.body;
  if (!description) {
    return res.status(400).json({
      error: 'You must provide a description',
    });
  }

  res.status(201).json(task);
});

app.delete('/tasks/:id', (req, res) => {
  // const id = Number(req.params.id);
  const { id } = req.params;
  // data = data.filter((task) => task.id !== Number(id));

  res.sendStatus(204);
  // res.json(task)
});

app.put('/tasks/:id', (req, res) => {
  const { done, description } = req.body;
  const { id } = req.params;

  res.json(task);

  // const newTask = {
  //   id: id,
  //   description,
  //   done: done || false,
  // };
  // const taskIndex = data.findIndex((task) => task.id === id);
  // data[taskIndex] = newTask;
  // console.log(data);
  // res.send();
});

const PORT = 3000;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);

function cors(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE, PATCH'
  );
  next();
}
