var express = require('express');
var router = express.Router();
let subjectController = require('../controllers/study/subject')

/* GET home page. */
router.get('/subject', subjectController.getSubject);

module.exports = router;