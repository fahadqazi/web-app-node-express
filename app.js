var express = require('express');

var app = express();

var port = 5000; 

//sets up middleware
//used by express first, before it does anything else
app.use(express.static('public'));
app.use(express.static('src/views'))

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/books', function(req, res){
  res.send('hello books!');
});

app.listen(port, function(err){
  console.log('Running on port: ' + port);
})