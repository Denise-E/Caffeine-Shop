const main = require('../controller/main.js');

const express = require('express');
const router = express.Router();

router.get('/', main.index)

module.exports = router;