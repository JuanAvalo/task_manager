var tasks = require('../models/taskModel');

module.exports = {
    getAllTasks: async function (req, res, next) {
        var userId = req.params.userId;
        if(isNaN(userId)) res.status(400).json({"Error:":"Invalid ID"})
        else {
            var data = await tasks.getAllTasks(userId)
            res.set('Access-Control-Allow-Origin', '*')
            res.status(200).json(data)
            }
    },

    postTask: async function ( req, res, next) {
        var userId = req.params.userId;
        var date = req.body.date;
        var content = req.body.content;
        if(isNaN(userId)) res.status(400).json({"Error:":"Invalid ID"})
        else {
            try{
            await tasks.postTask(userId, date, content)
            res.set('Access-Control-Allow-Origin', '*')
            res.status(200).json({'status':'ok'})
            }
            catch (e) {
                res.status(500).json({
                    status:false,
                    error: e.message
                })
            }
        }

    },

    deleteTask: async function ( req, res, next) {
        var userId = req.params.userId;
        var taskId = req.query.taskId;
        if(isNaN(userId)) res.status(400).json({"Error:":"Invalid ID"})
        else {
            try{
            await tasks.deleteTask(userId, taskId)
            res.set('Access-Control-Allow-Origin', '*')
            res.set('Access-Control-Allow-Headers','X-Requested-With, Content-Type')
            res.status(200).json({'status':'ok'})
            }
            catch (e) {
                res.status(500).json({
                    status:false,
                    error: e.message
                })
            }
        }

    },

    updateTaskState: async function ( req, res, next) {
        var userId = req.params.userId;
        var taskId = req.body.taskId;
        var state = req.body.state;
        if(isNaN(userId)) res.status(400).json({"Error:":"Invalid ID"})
        else {
            try{
            await tasks.updateTaskState(userId, taskId, state)
            res.set('Access-Control-Allow-Origin', '*')
            res.set('Access-Control-Allow-Headers','X-Requested-With, Content-Type')
            res.status(200).json({'status':'ok'})
            }
            catch (e) {
                res.status(500).json({
                    status:false,
                    error: e.message
                })
            }
        }

    },

    updateTask: async function ( req, res, next) {
        var userId = req.params.userId;
        var taskId = req.body.taskId;
        var content = req.body.content;
        if(isNaN(userId)) res.status(400).json({"Error:":"Invalid ID"})
        else {
            try{
            await tasks.updateTask(userId, taskId, content)
            res.set('Access-Control-Allow-Origin', '*')
            res.set('Access-Control-Allow-Headers','X-Requested-With, Content-Type')
            res.status(200).json({'status':'ok'})
            }
            catch (e) {
                res.status(500).json({
                    status:false,
                    error: e.message
                })
            }
        }

    }
}