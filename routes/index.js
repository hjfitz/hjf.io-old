const express = require('express');
const util = require('../util');

const render = express.Router();


/* GET home page. */
render.get('/', (req, res) => {
  res.render('index', {
    title: 'Harry Fitzgerald',
    layout: false,
  });
});

render.get('/about', (req, res) => {
  res.render('about', { title: 'About Me', about: 'hidden' });
});

render.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects', projects: 'hidden' });
});

render.get('/question', (req, res) => {
  res.render('question', { title: 'Question Time' });
});

render.get('/notes', (req, res) => {
  res.render('notes', {
    title: 'University Notes',
    insenote: [
      { inselink: 'note1.html', insetitle: 'note1' },
      { inselink: 'note2.html', insetitle: 'note2' },
    ],
  });
});

render.get('/grades', (req, res) => {
  res.render('grade', {
    title: 'Grade Calculator',
  });
});

render.get('/docs', (req, res) => {
  const files = util.docs.getFiles();
  res.render('docs', {
    title: 'University Notes',
    files,
  });
});

module.exports = render;
