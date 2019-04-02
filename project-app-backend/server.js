const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

let httpRoutes = require('./api/routes/getData/http');

//создание express приложения
const app = express();
const port = process.env.port || 3000;

//настройка соединения и подключение к базе данных, используя модуль mangoose.
mongoose.connect('mongodb://localhost/testDB', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('database connection established');
});

//промежуточные обработчики 
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//промежуточные обработчики маршрутов
app.use('/api/http', httpRoutes.rout);

app.listen(port,function () { 
	console.log(`server start on port ${port}`);
});






















