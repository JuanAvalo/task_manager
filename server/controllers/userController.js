var users = require('../models/userModel');

module.exports = {
    getUser: async function (req, res, next) {
        var userId = req.params.userId;
        if(isNaN(userId)) res.status(400).json([{"Error:":"Invalid ID"}])
        else {
            var data = await users.getUser(userId)
            res.set('Access-Control-Allow-Origin', '*')
            res.status(200).json(data)
            }
    }
}