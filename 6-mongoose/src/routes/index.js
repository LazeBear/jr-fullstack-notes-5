const express = require('express');
const authGuard = require('../middleware/authGuard');
const authRouter = require('./auth');
const courseRouter = require('./course');
const studentRouter = require('./student');
const userRouter = require('./user');

const router = express.Router();

router.use('/courses', authGuard, courseRouter);
router.use('/students', studentRouter);
router.use('/users', userRouter);
router.use('/auth', authRouter);
// /login

module.exports = router;
