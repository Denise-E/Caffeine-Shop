const products = require('../controller/products.js');

const express = require('express');
const router = express.Router();

router.get('/categories/:id', products.categories)
router.get('/:id', products.products)

module.exports = router;