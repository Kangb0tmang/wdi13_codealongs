// route /about
// read file named about.html
// use it as response
// else, respond with 'hello world'
// hint: you will need fs module
var fs = require('fs');
var http = require('http');
var buffer = fs.readFileSync('about.html');

var app = function(request, response)
{
  var path = request.url;
  if (path === '/about')
  {
    console.log('a request was made');
    fs.readFile('about.html', 'utf-8', function(err, data)
    {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
    });
    // response.write(buffer);
  }
  else if (path === '/api')
  {
    console.log('a request was made');
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write('{"test": "one"}');
    response.end();
  }
  else
  {
    console.log('a request was made');
    response.writeHead(404);
    response.write('hello world');
    response.end();
  }
};

var server = http.createServer(app);
server.listen(8888);
