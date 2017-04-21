const express = require('express')
const questionTime = express.Router()
const RateLimit = require('express-rate-limit')


// initialise a counter. TODO: find a way to reset this
var counter = 0

// set up a limiter that refreshes every 2 hours.
// has a max of 10 pings per person
var limiter = new RateLimit({
    windowMs: 2*60*1000,
    max:10,
    delayMs:0
  })

//use the limiter
questionTime.use('/inc', limiter)

questionTime.get('/', (req, res, next) => {
  //send back the counter
  res.json({'count':counter})
})

questionTime.patch('/inc', (req, res, next) => {
  //increase the counter
  counter++

  //send back the counter
  res.json({'count':counter})
})

module.exports = questionTime
