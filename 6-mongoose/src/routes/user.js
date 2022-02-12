const express = require('express');
const { signUp } = require('../controllers/user');

const userRouter = express.Router();

userRouter.post('', signUp);

module.exports = userRouter;
