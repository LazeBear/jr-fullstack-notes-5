const express = require('express');
const authRouter = require('./auth');
const courseRouter = require('./course');
const studentRouter = require('./student');
const userRouter = require('./user');

const router = express.Router();

router.use('/courses', courseRouter);
router.use('/students', studentRouter);
router.use('/users', userRouter);
router.use('/auth', authRouter);

module.exports = router;
