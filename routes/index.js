var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', subjectController.getSubject);

router.get('/login', function(req, res) {
    res.render('login/index', { title: 'Login' });
})

router.get('/account/:mssv', function(req, res) {
    let mssv = req.params.mssv;
    res.render('account/index', { title: 'Account', mssv: mssv });
})


router.post('/login', function(req, res) {
    let mssv = req.body.mssv;
    let email = req.body.email;
    res.redirect('/account/' + mssv);
})


module.exports = router;