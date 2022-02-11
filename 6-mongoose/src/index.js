require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const connectToDB = require('./utils/db');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/v1', router);

connectToDB();

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
