let subjectModel = require('../../models/study/subject')
class subjectController {
    async getSubject(req, res) {
        let result = await subjectModel.getAllsubject()
        console.log(result)
        res.render("study/subject", {
            title: `THÔNG TIN MÔN HỌC`,
            subjectList: await subjectModel.getAllsubject()
        })
    }
}
module.exports = new subjectController();