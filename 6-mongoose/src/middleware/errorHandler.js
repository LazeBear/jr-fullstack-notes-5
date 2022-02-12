module.exports = (error, req, res, next) => {
  // if (error instanceof CustomError){}
  if (error.name === 'ValidationError') {
    if (process.env.NODE_ENV === 'production') {
      return res.status(400).json({ error: error.message });
    }
    return res.status(400).json(error);
  }
  //if
  // switch (error) {
  //   case value:

  //     break;

  //   default:
  //     break;
  // }
  console.log(error);
  return res.status(500).json({
    error: 'Error! Please try later',
  });
};

// next(new CustomError('xxxxx'));

// class CustomError extends Error {
// constructor(message) {
// super(message);
// }
// }
