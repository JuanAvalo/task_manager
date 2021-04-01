const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;

const users = require('./controllers/userController');
const quotes = require('./controllers/quoteController');
const tasks = require('./controllers/taskController');
const { json } = require('body-parser');

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({extended:false});

//To allow api calls from origin
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', '*', "Origin, X-Requested-With, Content-Type, Accept, content-type");
    res.header('Access-Control-Allow-Methods','GET, POST, DELETE, PUT');
    next();
});

//Setting up the endpoints
app.get('/:userId', users.getUser);
app.get('/:userId/quotes', quotes.getAllQuotes);
app.get('/:userId/tasks', tasks.getAllTasks);
app.post('/:userId', urlencodedParser, quotes.postQuote);
app.post('/:userId/addTask', urlencodedParser, tasks.postTask);
app.delete('/:userId/tasks', urlencodedParser, tasks.deleteTask);
app.put('/:userId/tasks/state', urlencodedParser, tasks.updateTaskState);
app.put('/:userId/tasks', urlencodedParser, tasks.updateTask);

app.listen(port, () => {
  console.log(`CRUD API listening at port: ${port}`)
})