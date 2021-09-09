const express = require('express');
const router = express.Router();
const keyboard_result = require('../API/controllers/keyboard_result.controller'),
      keyboard = require('../API/controllers/keyboard.controller');
const keyboard_validate = require('../API/validation/keyboard');

router.get('/', keyboard.get_keyboard);
router.post('/result',keyboard_validate.keyboard_validation, keyboard_result.post_result);


module.exports = router;
