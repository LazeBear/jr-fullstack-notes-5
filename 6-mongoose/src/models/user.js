const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

schema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 12);
};

schema.methods.validatePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', schema);

/**
 * 加密，解密 (可逆化)
 * encrypt, decrypt
 * X -> x, x -> X
 * 哈希
 * hash
 * 不可逆
 * X -> x, x !-> X
 *
 * X' -> x
 * X = X'
 *
 *
 * X -> x
 * X + salt1 -> salt1+X'
 * X + salt2 -> salt2+X''
 */
