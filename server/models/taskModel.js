var db = require ('../bin/mysql');

module.exports.getAllTasks = async function (userId) {
    const sql_query = "SELECT idTask, idUser, date, state, content FROM task WHERE idUser=" + userId;
    const [rows, fields] = await db.pool.execute(sql_query);
    return rows;
}

module.exports.postTask = async function (userId, date, content) {
    const sql_query = "INSERT INTO task (idUser, date, state, content) "
                     +'VALUES ( '+userId+', "'+date+'", 1, "'+content+'" )';

    await db.pool.query(sql_query)
    return;
}

module.exports.deleteTask = async function (userId, taskId) {
    const sql_query = "DELETE FROM task WHERE idUser= "+ userId + " AND idTask= " + taskId;

    await db.pool.query(sql_query)
    return;
}

module.exports.updateTaskState = async function (userId, taskId, state) {
    const sql_query = 'UPDATE task SET state= ' + state + ' WHERE idUser = ' + userId + ' AND idTask = ' + taskId;

    await db.pool.query(sql_query)
    return;
}

module.exports.updateTask = async function (userId, taskId, content) {
    const sql_query = 'UPDATE task SET content= "' + content + '" WHERE idUser = ' + userId + ' AND idTask = ' + taskId;

    await db.pool.query(sql_query)
    return;
}