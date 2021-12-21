const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./index.html');

function foo() {
  console.log(2);
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('<h1>Hello</h1>');
    res.end();
    return;
  }

  if (req.url === '/data') {
    res.write('[1,2,3,4,5]');
    res.end();
    return;
  }

  if (req.url === '/home') {
    res.write(homePage);
    foo();
    res.end();
    return;
  }
});

// port to port
server.listen(3000);
