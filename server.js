const express = require('express')
const errorHandler = require('errorhandler')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/', (req, res) => {
  res.render('pages/index')
})
app.get('/codebase', (req, res) => {
  res.render('pages/codebase')
})
app.get('/dependencies', (req, res) => {
  res.render('pages/dependencies')
})
app.get('/config', (req, res) => {
  res.render('pages/config')
})
app.get('/backing-services', (req, res) => {
  res.render('pages/backing-services')
})
app.get('/build-release-run', (req, res) => {
  res.render('pages/build-release-run')
})
app.get('/processes', (req, res) => {
  res.render('pages/processes')
})
app.get('/port-binding', (req, res) => {
  res.render('pages/port-binding')
})
app.get('/concurrency', (req, res) => {
  res.render('pages/concurrency')
})
app.get('/disposability', (req, res) => {
  res.render('pages/disposability')
})
app.get('/dev-prod-parity', (req, res) => {
  res.render('pages/dev-prod-parity')
})
app.get('/logs', (req, res) => {
  res.render('pages/logs')
})
app.get('/admin-processes', (req, res) => {
  res.render('pages/admin-processes')
})

app.use(errorHandler())

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})

module.exports = server
