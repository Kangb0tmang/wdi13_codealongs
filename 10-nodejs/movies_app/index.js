var express = require ('express');
var app = express();
var logger = require('./logger');
var request = require('request');
const PORT = 8888;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(logger);

app.use(express.static('public'));

app.get('/', function(request, response)
{
  response.render('index');
});

app.get('/api/info', function(request, response)
{
  response.json({version: 1});
});

app.get('/about', function(request, response)
{
  response.send('about page');
});

app.get('/details', function(req, response)
{
  const url = `http://omdbapi.com/?t=${req.query.title}&apikey=2f6435d9`;
  request(
  {
    url: url,
    json: true
  }, function(err, apiResponse, movie)
  {
    response.render('details', { movie: movie });
  });
});

app.listen(PORT);
