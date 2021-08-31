const express = require('express');
const router = express.Router();
const keybord_result = require('../API/controllers/keybord_result.controller'),
      keybord = require('../API/controllers/keybord.controller');
const keybord_validate = require('../API/validation/keybord');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});
router.get('/keybord', keybord.get_keybord);
router.post('/keybord/result',keybord_validate.keybord_validation, keybord_result.post_result);


module.exports = router;
