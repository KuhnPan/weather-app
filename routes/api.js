// All API related routes starting with /api
var express = require('express')
var router = express.Router()

// Require controller modules.
var leader_controller = require('../controllers/leaderController');

// GET api home page.
router.get('/', leader_controller.index);

// GET request for one leader.
router.get('/leader/:id', leader_controller.leader_detail);

// GET request for list of all leader items.
router.get('/leaders', leader_controller.leader_list);

module.exports = router
