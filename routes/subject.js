var express = require('express');
var router = express.Router();
let subjectController = require('../controllers/study/subject')
let classroomController = require('../controllers/classroom/classroom')
    /* GET home page. */
router.get('/subject', subjectController.getSubject);
router.get('/groupclass', subjectController.getGroupClass);
router.get('/groupclass/:year.:semester', subjectController.getGroupClassDetail);
router.get('/classroom', classroomController.getAllClassroom)

module.exports = router;