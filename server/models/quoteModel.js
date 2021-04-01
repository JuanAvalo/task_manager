var db = require ('../bin/mysql');

module.exports.getAllQuotes = async function (userId) {
    const sql_query = "SELECT idQuote, idUser, date, text, author FROM quote WHERE idUser=" + userId;
    const [rows, fields] = await db.pool.execute(sql_query);
    return rows;
}

module.exports.postQuote = async function (userId, date, text, author) {
    const sql_query = "INSERT INTO quote (idUser, date, text, author) "
                     +'VALUES ( '+userId+', "'+date+'", "'+text+'", "'+author+'" )';

    await db.pool.query(sql_query)
    return;
}