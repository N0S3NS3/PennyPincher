//***************************************************************************
// Penny Pincher (2014 - 2015)
// 		A MEAN stack, decoupled alternative for Amazon price analytics 
// Authors: Zachary Moriarty
//          MacKinley Trudeau
//          Venus Ho
//          Erin Fahey 
//          Marvin Celestin
//
//  app.js: Initial Node.js server initialization and configuration, routes are 
//  handled as separate modules.
//***************************************************************************

// Modules 
// Express Module
var express = require('express');
// Path Module
var path = require('path');
// HandleBars Module
var handlebars = require('hbs');
// Index Module 
// Will handle the main functionality of the web application, the main forms in which user 
// interaction takes place is encapsulated within this modules
var index = require('./bin/index');
// Database Module
// Will handle the queries of either a relational or document database 
// var database = require('./bin/database');
// Product Module 
// Will handle the CRUD related functionality of Product objects which are used within the app
var product = require('./bin/product');
// Scraper Module 
// var scraper = require('./bin/scraper');

// Express Handler
var app = express();

// Render Configuration
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', handlebars.__express);

// Module Configuration
app.use(index);
app.use(product);

// Define static directory 'views' for error files
app.use(express.static(path.join(__dirname, 'views')));
app.use(function(req, res){
    res.status(400);
    res.sendFile(__dirname + '/views/404.html');
});
app.use(function(error, req, res, next){
    res.status(500);
    res.sendFile(__dirname + '/views/500.html');
});
//Socket.io Module
var httpServer = require('socket.io').listen(app.listen(3000));

console.log("Listening");