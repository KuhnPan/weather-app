// All backend admin related routes starting with /admin
var express = require('express')
var router = express.Router()

//var login = require('./admin/login');//路由，登陆
//var user = require('./admin/user');//路由，用户

router.use('/login', require('./admin/login'))
router.use('/user', require('./admin/user'))

router.get('/', function (req, res, next) {
  res.send('admin')
})

module.exports = router
