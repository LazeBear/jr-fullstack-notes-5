const express = require('express');

const app = express();

const data = [];

// middleware function
// application level middleware
app.use(express.json());

// app.use('*', routeHandler)
// /v1*
// app.use('/v1', m1);
// app.get('/v1', m2)
// app.all('/v1', m3);

// /v1/tasks

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
  // if (!name) {
  // next(new ValidationError('name is missing'))
  // return;
  // res.status(400).json({})
  // return;
  // }
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

// 小型app
const userRouter = express.Router();
userRouter.get('/:id', (req, res) => {
  res.json({ msg: 'hello' });
});
// userRouter.post

// GET /v1/users/123
app.use('/v1/users', userRouter);

const validationErrorHandler = (error, req, res, next) => {
  // if (error.type === 'xxxx')
  if (error instanceof ValidationError) {
    res.status(400).json({ error: 'xxxx' });
    return;
  }
  next(error);
};

// class CustomError extends Error {

// }

// next(new CustomError('xxxx'));

const errorHandler = (error, req, res, next) => {
  // not recommend
  console.log(error);
  res.status(500).json({ error: 'server cannot handler your request now' });
};

app.listen(3000, () => {
  console.log('server listening on port 3000');
});

// fail fast
// code style
// if (false) {
//   return;
// }
// xxx
// xxx
// if (false) {
//   return;
// }

// if (true) {
//   if (true) {
//     if (true) {

//     } else {

//     }
//   } else {

//   }
// } else {
//   return;
// }
