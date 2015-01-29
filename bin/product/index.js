//***************************************************************************
// Product Handler
// index.js: RESTful API handler for Product object CRUD functionality
//***************************************************************************

var express = require('express');
var handlebars = require('hbs');
var fs = require('fs');
var path = require('path');

var product = require('./public/products.js');
var jsonFactory = require('../public/jsonFactory/factory.js');
var mongoHandler = require('../mongoHandler/public/mongoHandler.js');

var app = module.exports = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', handlebars.__express);

app.use(express.static(path.join(__dirname, 'public')));

//***************************************************************************
// /product GET Request:
//		When requested, the designated product will be returned based on the provided
//		parameters from the client. Parameters to request a product are AmazonID and Tag
//***************************************************************************
app.get('/product', function(req, res){
	//validate the parameters 
});
//***************************************************************************
// /product POST request:
//		When requested, validation of the product JSON object will be handled, 
//		if no errors are encountered then the product will be uploaded to the 
//		database.
//***************************************************************************
app.post('/product', function(req, res){

});
//***************************************************************************
// /product/asin GET Request:
//		Request of a specific Amazon Product based on Amazon Standard 
//		Identification Number (asin).
//***************************************************************************
app.get('/product/asin', function(req, res){

});
//***************************************************************************
// /product/isbn GET Request:
//		Request of a specific Amazon Product based on International Standard 
//		Book Notation (isbn).
//***************************************************************************
app.get('/product/isbn', function(req, res){

});
//***************************************************************************
// /product/upc GET Request:
//		Request of a specific Amazon Product based on Universal Product 
//		Code (upc).
//***************************************************************************
app.get('/product/upc', function(req, res){

});
//***************************************************************************
// product/gtin GET Request:
//		Request of a specific Amazon Product based on Global Trade Item 
//		Number (gtin-14).
//***************************************************************************
app.get('/product/gtin', function(req, res){

});

//******
//So basically, what Node.JS allows is the routing of static pages as well as getting data from the DataBase
//Everything else SHOULD be handled in the Client
//So, going from one page, or pressing a button... that is handled via client
//going to another page, like loljk.com/ to loljk.com/cat will be performed when html form call the node server
