require('dotenv').config();
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');
const router = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/v1', router);

// app.use(validationErrorHandler)
app.use(errorHandler);

module.exports = app;
