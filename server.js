var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');

app.use(cors());

var authCheck = jwt({
  secret: new Buffer('7osr46HYOo3ueGgx0PX7pjpxT6RkM9A_Epj2xJxQWst2N47sG54b0HlChqS82kwC', 'base64'),
  audience: 'RFoM7GvOnYr7A6dII5cp87aWZUO7BlHa'
});

app.get('/api/public', function(req, res) {
  res.json({ message: "Hello from a public endpoint! You don't need to be authenticated to see this." });
});

app.get('/api/private', authCheck, function(req, res) {
  res.json({ message: "Hello from a private endpoint! You DO need to be authenticated to see this." });
});

app.listen(3001);
console.log('Listening on http://localhost:3001');