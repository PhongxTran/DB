let connection = require('../../config')

exports.getAllsubject = async function() {
    return connection.awaitQuery(`SELECT * FROM subject`)
}