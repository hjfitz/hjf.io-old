const express = require('express');
const RateLimit = require('express-rate-limit');

const questionTime = express.Router();


// initialise a counter. TODO: find a way to reset this
let counter = 0;

// set up a limiter that refreshes every 2 hours.
// has a max of 10 pings per person
const limiter = new RateLimit({
  windowMs: 2 * 60 * 1000,
  max: 50,
  delayMs: 0,
});

// use the limiter
questionTime.use('/inc', limiter);

questionTime.get('/', (req, res) => {
  // send back the counter
  res.json({ count: counter });
});

questionTime.patch('/inc', (req, res) => {
  // increase the counter
  counter += 1;

  // send back the counter
  res.json({ count: counter });
});

module.exports = questionTime;
