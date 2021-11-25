var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/subject', function(req, res, next) {
    res.render('study', { title: 'Express' });
});

module.exports = router;