const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      uppercase: true,
      // alias -> aka
      // virtual property
      alias: 'code',
    },
    name: {
      type: String,
      required: true, // mongoose validation
    },
    description: {
      type: String,
      default: '',
      select: false,
    },
    __v: {
      type: Number,
      select: false,
    },
    students: [
      // mongoose.Schema.Types.ObjectId
      { type: mongoose.Types.ObjectId, ref: 'Student' },
    ],
    // student: {
    //   type: mongoose.Types.ObjectId,
    //   ref: 'Student',
    // },
    // code: {

    // }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// courses
const Model = mongoose.model('Course', schema);

module.exports = Model;

// module.exports = mongoose.Model("Model", new mongoose.Schema({}))
