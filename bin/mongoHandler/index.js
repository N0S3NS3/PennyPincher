var express = require('express');
var handlebars = require('hbs');
var fs = require('fs');
var path = require('path');

var mongoHandler = require('./public/mongoHandler.js');

var app = module.exports = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', handlebars.__express);

app.use(express.static(path.join(__dirname, 'public')));