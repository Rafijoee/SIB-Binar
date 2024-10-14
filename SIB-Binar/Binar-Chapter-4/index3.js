const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
})

// define the home page route
router.use('/login', function (req, res, next) {
    res.send('Birds some page');
})

// define the about route
router.use('/register', function (req, res, next) {
    res.send('About Birds');
})

module.exports = router;