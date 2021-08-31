const express = require('express');
const router = express.Router();
const keybord_result = require('../API/controllers/keybord_result.controller');
const keybord = require('../API/controllers/keybord.controller');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});
router.get('/keybord', keybord.get_keybord);
router.post('/keybord/result', keybord_result.post_result);


module.exports = router;
