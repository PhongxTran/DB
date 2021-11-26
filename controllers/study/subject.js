let subjectModel = require('../../models/study/subject')
let groupclassModel = require('../../models/study/groupclass')

class subjectController {
    async getSubject(req, res) {
        res.render("study/subject", {
            title: `THÔNG TIN MÔN HỌC`,
            subjectList: await subjectModel.getAllsubject()
        })
    }

    async getGroupClass(req, res) {
        res.render("study/groupclass", {
            title: `TỔ NHÓM`,
            subjectList: await groupclassModel.getAllGroupClass()
        })
    }

    async getGroupClassDetail(req, res) {
        let params = req.params;
        let year = Number(params.year);
        let semester = Number(params.semester);

        let subjectList = await groupclassModel.getAllGroupClassDetail(year, semester);

        res.render("study/groupclass_detail", {
            title: `${year} - ${semester}`,
            subjectList: subjectList
        })

    }
}
module.exports = new subjectController();