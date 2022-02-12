module.exports = (error, req, res, next) => {
  if (error.name === 'ValidationError') {
    if (process.env.NODE_ENV === 'production') {
      return res.status(400).json({ error: error.message });
    }
    return res.status(400).json(error);
  }
  next();
};
