const main = require('../controller/main.js');

const express = require('express');
const passport = require('passport');
const { route } = require('./main.js');
const router = express.Router();


router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));
router.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login'
}), (req, res) => {
    return res.send(req.user);
});


module.exports = router;