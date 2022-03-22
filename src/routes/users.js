const users = require('../controller/users.js');

const express = require('express');
const router = express.Router();


router.get('/register', users.register);
router.get('/login', users.login);

module.exports = router;