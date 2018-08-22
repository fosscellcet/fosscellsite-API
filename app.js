var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { sequelize } = require('./models');
const config = require('./config/config.json')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync()
    .then(() => {
        app.listen(3000);
        console.log('Server started in port 3000');
    }
)

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

module.exports = app;
