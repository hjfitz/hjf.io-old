const express = require('express');
const questionRouter = require('./question');

const api = express.Router();


// use routers here
api.use('/question', questionRouter);

// respond to GET
api.get('/', (req, res) => {
  res.send('Welcome to APIv1!');
});

module.exports = api;
