const mainPage = require('./module/html');
console.log(mainPage);

// http 는 내장 모듈
const http = require('http');

const server = http.createServer(function(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end(mainPage);
});

server.listen(2080, function(error) {
  if(error === true) {
    console.error('서버 안돌아감');
  } else {
    console.log('서버 돌아감');
  }
});