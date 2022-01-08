const express = require('express');

const app = express();

const data = [];

// middleware function
app.use(express.json());

// application.method(path, callback - route handler)
app.get('/', (req, res) => {
  res.send('hello world');
});

/**
 * 从request取数据的方法
 * 1. body            -> POST, PUT, PATCH
 *    req.body
 * 2. query param (?) -> GET  (数据筛选 filtering)
 *    req.query
 * 3. route param     -> GET, POST, PUT, PATCH, DELETE  基本是都是id
 *    req.params                                       /v1/trainers/xxxxxxxx
 */
app.post('/v1/trainers/:trainerId', (req, res) => {
  const { name, obj } = req.body;
  const { title } = req.query;
  const { trainerId } = req.params;
  console.log(title);
  if (title) {
    res.json({ title });
    return;
  }
  // const titleArray = title.split(',');
  // res.send()
  res.json({ name, title, trainerId, obj });
  // status code 200
  // res.status(201).json() -> 设置status code，然后做返回
  // res.sendStatus(201)    -> 设置status code，只返回status code

  // res.send | res.json 应该只调用一次
  // res.setHeader('x-custom', '123');
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
