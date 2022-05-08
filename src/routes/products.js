const products = require('../controller/products.js');

const express = require('express');
const router = express.Router();

router.get('/:id', products.detail)
router.get('/categories/:id', products.categories)


module.exports = router;