const express = require("express");
const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');
const startUpDebugger = require('debug')('app:startUP');
const dBDebugger = require('debug')('app:dB');

const logger = require('./logger');
const courses = require('./routes/courses');
const homePage = require('./routes/homePage')
const app = express();

app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');
app.set('views', './views');

const PORT = process.env.PORT || 8900;
const hostName = "localhost";

console.log('name', config.name);

if(process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'qa') {
  app.use(morgan('tiny'));
  startUpDebugger('Morgan Started');
}


app.use(express.json()); // req.body will be populated with json object
app.use(express.urlencoded({ extended: true })); // key=value&key=value , It populates it with json object on req.body
app.use(express.static('public'));
app.use(helmet());

app.use('/api/courses/',courses);
app.use('/',homePage);




// some db work so then
dBDebugger('Connecting to MYSQl DATABASE');

app.use(logger);

app.listen(8900, hostName, () => {
  console.log(`Server has Started on port ${PORT}`);
});