// Home index page
var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  // res.send('index')
  res.render('index',{weather: null, error: null})
})

module.exports = router
