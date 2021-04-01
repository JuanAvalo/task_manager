var quotes = require('../models/quoteModel');

module.exports = {
    getAllQuotes: async function (req, res, next) {
        var userId = req.params.userId;
        if(isNaN(userId)) res.status(400).json({"Error:":"Invalid ID"})
        else {
            var data = await quotes.getAllQuotes(userId)
            res.set('Access-Control-Allow-Origin', '*')
            res.status(200).json(data)
            }
    },

    postQuote: async function ( req, res, next) {
        var userId = req.params.userId;
        var date = req.body.date;
        var text = req.body.text;
        var author = req.body.author;
        if(isNaN(userId)) res.status(400).json({"Error:":"Invalid ID"})
        else {
            try{
            await quotes.postQuote(userId, date, text, author)
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

    }

}