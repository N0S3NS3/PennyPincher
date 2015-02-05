//***************************************************************************
// Product Handler
// index.js: RESTful API handler for Product object CRUD functionality
//***************************************************************************

var express = require('express');
var path = require('path');
var products = require('./public/products');
var app = module.exports = express();
app.use(express.static(path.join(__dirname, 'public')));

//***************************************************************************
// /product GET Request:
//		When requested, the designated product will be returned based on the provided
//		parameters from the client. Parameters to request a product are AmazonID and Tag
//***************************************************************************
app.get('/product', function(req, res){
	var product = new products();
	res.send('success');
	//validate the parameters
});
//***************************************************************************
//	/product/productIDList GET Request:
//		When requested, return the available ProductID's for the scraper
//***************************************************************************
app.get('/product/productIDList', function(req, res){
	//Scraper Key Validation
	res.json(product.getProductIDList());
});
//***************************************************************************
//	/product/productSchema GET Request:
//***************************************************************************
app.get('/product/productSchema', function(req, res){

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