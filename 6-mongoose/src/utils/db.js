const mongoose = require('mongoose');

// const connectToDB = () => {}
function connectToDB() {
  const connectionString = process.env.CONNECTION_STRING;
  if (!connectionString) {
    console.error('connection string not defined');
    // 正常退出
    // 人为正常退出
    // process.exit(0);
    // 非正常退出
    process.exit(1);
  }

  const db = mongoose.connection;

  db.on('connected', () => {
    console.log(`DB connected, ${connectionString}`);
  });

  db.on('error', (error) => {
    console.error(error.message);
    process.exit(2);
  });

  db.on('disconnected', () => {
    console.log('db connection lost');
  });

  return mongoose.connect(connectionString);
}

// connectToDB().then()

module.exports = connectToDB;
