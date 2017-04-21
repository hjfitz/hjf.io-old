const express = require('express')
const render = express.Router()
const util = require('../util')
const notes = util.notes



/* GET home page. */
render.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Harry Fitzgerald',
    layout:false
  })
})

render.get('/about', (req, res, next) => {
  res.render('about', { title: 'About Me', about: 'hidden' })
})

render.get('/projects', (req, res, next) => {
  res.render('projects', { title: 'Projects', projects: 'hidden' })
})

render.get('/question', (req, res, next) => {
  res.render('question', { title: 'Question Time' })
})

render.get('/notes', (req, res, next) => {
  res.render('notes', {
    title: "University Notes",
    insenote: [
      {inselink: "note1.html", insetitle:"note1"},
      {inselink: "note2.html", insetitle:"note2"}
    ]
  })
})
module.exports = render;
