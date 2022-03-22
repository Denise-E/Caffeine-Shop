const products = require('../controller/products.js');

const express = require('express');
const router = express.Router();

router.get('/coffee', products.coffee);
router.get('/accesories', products.accesories);

module.exports = router;