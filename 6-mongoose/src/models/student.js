// firstName: String
// lastName: String
// email: String

// Joi
// express-validator, validator.js

const mongoose = require('mongoose');
const Joi = require('joi');

module.exports = mongoose.model(
  'Student',
  new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 10,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (email) => {
          // const validation = Joi.string().email().validate(email);
          // const { error } = validation;
          // if (error) {
          //   return false;
          // }
          // return true;
          return !Joi.string().email().validate(email).error;
        },
        msg: 'Invalid email format',
      },
    },
    courses: [
      {
        type: String,
        ref: 'Course',
      },
    ],
  })
);
