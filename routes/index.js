var express = require('express');
var render = express.Router();

/* GET home page. */
render.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Harry Fitzgerald',
    layout:false
  })
})

render.get('/about', (req, res, next) => {
  res.render('about', { title: 'about', about: 'hidden' })
})

render.get('/projects', (req, res, next) => {
  res.render('projects', { title: 'projects', projects: 'hidden' })
})

module.exports = render;
