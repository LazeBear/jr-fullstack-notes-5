const fs = require('fs');
const path = require('path');
// module, package, library

console.log(1);
const content = fs.readFileSync(path.join(__dirname, 'test.txt'), 'utf-8');
console.log(2);
fs.readFile(path.join(__dirname, 'test.txt'), 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
  console.log(3);
});

fs.writeFileSync(path.join(__dirname, 'test.txt'), 'hello from node');
// fs.appendFileSync
// fs.writeFile();

console.log(content);
