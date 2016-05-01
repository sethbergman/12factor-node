var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/codebase', function(request, response) {
  response.render('pages/codebase');
});
app.get('/dependencies', function(request, response) {
  response.render('pages/dependencies');
});
app.get('/config', function(request, response) {
  response.render('pages/config');
});
app.get('/backing-services', function(request, response) {
  response.render('pages/backing-services');
});
app.get('/build-release-run', function(request, response) {
  response.render('pages/build-release-run');
});
app.get('/processes', function(request, response) {
  response.render('pages/processes');
});
app.get('/port-binding', function(request, response) {
  response.render('pages/port-binding');
});
app.get('/concurrency', function(request, response) {
  response.render('pages/concurrency');
});
app.get('/disposability', function(request, response) {
  response.render('pages/disposability');
});
app.get('/dev-prod-parity', function(request, response) {
  response.render('pages/dev-prod-parity');
});
app.get('/logs', function(request, response) {
  response.render('pages/logs');
});
app.get('/admin-processes', function(request, response) {
  response.render('pages/admin-processes');
});

var server = app.listen(process.env.PORT | 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
