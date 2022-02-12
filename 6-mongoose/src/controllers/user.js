const User = require('../models/user');
const { generateToken } = require('../utils/jwt');

async function signUp(req, res) {
  const { username, password } = req.body;
  // validation
  // check existing user by username
  const user = new User({ username, password });
  await user.hashPassword();
  await user.save();
  const token = generateToken({ username });
  return res.json({ username, token });
}

// function updatePassword() {
//   await user.hashPassword();
// }

module.exports = {
  signUp,
};
