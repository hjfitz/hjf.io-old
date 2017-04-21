const
  express = require('express'),
  api = express.Router(),
  questionRouter = require('./question')
;

// use routers here
api.use('/question', questionRouter)

// respond to GET
api.get('/', (req, res) => {
  res.send('Welcome to APIv1!')
})

module.exports = api
