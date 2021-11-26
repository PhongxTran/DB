let connection = require('../../config')

exports.getAllClassroom = async function() {
    return connection.awaitQuery(`SELECT * FROM classroom`)
}