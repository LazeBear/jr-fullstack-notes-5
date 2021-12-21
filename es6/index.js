var foo = 'string';

var bar = foo;

bar = 123;

console.log(foo);

var obj = {
  a: 1,
};

var obj2 = obj;

obj2.a = 3;

console.log(obj);

// String, number, boolean, null, undefined ... (primitive type)
// Object, array, function (reference)

// obj -> 0x00001
// 0x00001 -> {a:1}
// obj2 -> 0x00001

const fruit = {};

// fruit = {}; throw error

// function declaration
// function expression

function foo() {}

const foo = function () {};

var arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // setTimeout(function () {
  // }, 1000);
}

console.log('Index: ' + i + ', element: ' + arr[i]);

// back tick
`hello world ${arr}`;
("I'm");
("I'm");

// shadow copy
// {a: 1}
// deep copy
// {a: {b: 2}};

// 解构

const obj = {
  a: {
    b: 1,
  },
};

const {
  a: { b },
} = obj;

const add = function (x, y) {
  return x + y;
};

const add = (x, y) => {
  return x + y;
};
const add = (x, y) => x + y;

const foo = (x, y) => {
  return {
    x,
    y,
  };
};
const foo = (x, y) => ({ x, y });

function normalFunction(param) {
  console.log(param);
}
function otherFunction() {}
function sum(x, y, callback, cb2) {
  const sum = x + y;
  callback(sum);
}
sum(1, 2, normalFunction);

// 闭包

// Module 模块

(function () {})();

// context
// 上下文

// nextDay() {
//   const fn = () => {
//     this.currentDay++;
//     console.log(this.currentDay);
//   };
//   setTimeout(fn);
//   }

const calendar = {
  currentDay: 6,
  nextDay() {
    // this
    setTimeout(() => {
      // this
      setTimeout(() => {
        this.currentDay++;
        console.log(this.currentDay);
      });
    });
  },
};

// prototype chain
// delegation pattern
