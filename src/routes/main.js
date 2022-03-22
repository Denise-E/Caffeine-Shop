const main = require('../controller/main.js');

const express = require('express');
const router = express.Router();

router.get('/', main.index);
router.get('/contact', main.contact);
router.get('/payment', main.payment);
router.get('/return', main.return);
router.get('/shipments', main.shipments);

module.exports = router;