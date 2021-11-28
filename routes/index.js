var express = require('express');
var router = express.Router();

let studyModel = require('../models/study/study')
let mssvstudent = 0

router.get('/login', function(req, res) {
    res.render('login/index', { title: 'Login' });
})

router.post('/login', function(req, res) {
    let mssv = req.body.mssv;
    res.redirect(`/account/${mssv}`);
})

router.get('/account/:mssv', function(req, res) {
    let mssv = req.params.mssv;
    let studyDetail = studyModel.getAllStudy(mssv)
    let subjectStudy = studyModel.getAllsubject(mssv)

    let studyDetailRender = []

    subjectStudy.forEach(subject => {
        let TKB = ``
        let temp = {}
        studyDetail.forEach(detail => {
            if (subject.subjectID == studyDetail.subjectID) {
                TKB += studyDetail.week
            }
            temp = detail
        });
        studyDetailRender.push(Object({
            ...detail,
            timing: detail.startTime + '-' + detail.endTime,
            week: TKB,
            groupClass: detail.classID + ' - ' + detail.groupID,
        }))

    });

    res.render('/account/index', { mssv: mssv, studyDetail: studyDetailRender });
})

router.get('/account/:mssv', function(req, res) {
    let mssv = req.params.mssv;
    mssvstudent = mssv

    res.render('account/index', { title: 'Account', mssv: mssv });
})

router.post('/login', function(req, res) {
    let mssv = req.body.mssv;
    let email = req.body.email;
    res.redirect('/account/' + mssv);
})

router.get('/score', function(req, res) {
    let subjectStudy = studyModel.getAllsubject(mssvstudent)
    res.render('score/index', {
        title: 'Score',
        subjectStudy: subjectStudy
    });
})


module.exports = router;