require('dotenv').config();
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');
const router = require('./routes');
const connectToDB = require('./utils/db');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/v1', router);

// app.use(validationErrorHandler)
app.use(errorHandler);

connectToDB();

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
