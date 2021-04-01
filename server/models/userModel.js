var db = require ('../bin/mysql');

module.exports.getUser = async function (userId) {
    const sql_query = "SELECT idUser, name, username, password FROM user WHERE idUser=" + userId;
    const [rows, fields] = await db.pool.execute(sql_query);
    return rows;
}