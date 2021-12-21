// // module

// const moduleA = { exports: {} };
// const moduleB = { exports: {} };

// (function (module) {
//   const msg = 'secret message';

//   function getMsg() {
//     return msg;
//   }

//   // return getMsg
//   module.exports = { getMsg };
// })(moduleA);

// (function (module) {
//   let count = 1;
//   function increment() {
//     count++;
//   }
//   function getCount() {
//     return count;
//   }

//   module.exports = { increment, getCount };
// })(moduleB);

// console.log(moduleA.exports.getMsg());
// console.log(moduleB.exports.getCount());
// moduleB.exports.increment();
// console.log(moduleB.exports.getCount());
console.log(__dirname, __filename);

const counter = require('./counter');

console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
