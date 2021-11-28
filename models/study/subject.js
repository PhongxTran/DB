let connection = require('../../config')

exports.getAllsubject = async function() {
    return connection.awaitQuery(`SELECT * FROM subject`)
}

exports.editsubject = async function(subject) {
    await connection.awaitQuery(` UPDATE subject SET subjectName = '${subject.subjectName}', credit = ${subject.credit}, final_score_weight = ${subject.final_score_weight}, exercise_weight = ${subject.exercise_weight}, lab_score_weight = ${subject.lab_score_weight} where subjectID = '${subject.subjectID}' `)
}

exports.deleteSubject = async function(subjectID) {
    await connection.awaitQuery(`DELETE FROM subject WHERE subjectID = '${subjectID}'`)
}