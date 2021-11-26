let classroomModel = require('../../models/classroom/classroom')

class classroomController {
    async getAllClassroom(req, res) {
        // console.log(await classroomModel.getAllClassroom());
        res.render("classroom/classroom", {
            title: `DANH SÁCH PHÒNG HỌC`,
            classroomList: await classroomModel.getAllClassroom()
        })
    }

}

module.exports = new classroomController()