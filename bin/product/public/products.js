module.exports = function(){

	var mongoose = require('mongoose');

	var productID = (function(){

		var asin = function(){
			var length =
			{
				min: 10,
				max: 10
			};
			var format = String;
			this.validate = function(value){

			};
		};
		var isbn = function(){
			var length =
			{
				min: 10,
				max: 13
			};
			var format = Number;
			this.validate = function(value){

			};
		};
		var upc = function(){
			var length =
			{
				min: 12,
				max: 12
			};
			var format = Number;
			this.validate = function(value){

			};
		};
		var gtin = function(){
			var length =
			{
				min: 14,
				max: 14
			};
			var format = Number;
			this.validate = function(value){

			};
		};

		return {

		};

	})();
		var schemaFactory = (function(){

		var schemaTypeList =
		[
			'String',
			'Number',
			'Date',
			'Buffer',
			'Boolean',
			'Mixed',
			'Objectid',
			'Array'
		];
		var schemaTypeLength = schemaTypeList.length;

		var productSchema = function(){

			var guid =
			{
				value: '',
				type: String,
				required: true
			};
			var productID =
			{
				value: [],
				type:
				{
					body: Array,
					type: productID
				},
				required: true,
				length:
				{
					min: 10,
					max: 10
				}
			};
			var tags =
			{
				value: [],
				type:
				{
					body: Array,
					type: String,
					length:
					{
						min:1,
						max:100
					},
					required: true
				}
			};
			var images =
			{
				value: [],
				type:
				{
					body: Array,
					type: String,
					length:
					{
						min: 1,
						max: 100
					},
					required: false
				}
			};
			var analytics =
			{
				value: '',
				type: Objectid,
				required: true
			};

			var validateASIN = function(value){
				if ((typeof(value) === asin.type) || value instanceof asin.type){
					if (value >= asin.length.min && value <= asin.length.max){
						//apply more validation here
						return true;
					}
				}
				return false;
			};




			this.setASIN = function(value){
				if (validateASIN(value)){
					asin.value = value;
					return true;
				}
				return false;
			};

		};

		var validateType = function(type){
			if ((typeof(type) !== 'undefined') && type !== null){
				for(var i = 0; i < schemaTypeLength; i++){
					if (type === schemaTypeList[i]){
						return true;
					}
				}
			}
			return false;
		};

		return{

		};
	})();

};



	// var schemaHandler = (function(){
	// 	var schema = mongoose.Schema;

	// 	var productSchema = (function(){

	// 		var assignGuid = function(){

	// 		};
	// 		var validateASIN = function(){

	// 		};
	// 		var guid =
	// 		{
	// 			'type': 'String',
	// 			'required': 'true'
	// 		};
	// 		var asin =
	// 		{
	// 			'type': 'String',
	// 			'required': 'true'
	// 		};
	// 		var tags =
	// 		{
	// 			'type': 'Array',
	// 			'required': 'true'
	// 		};
	// 		var images =
	// 		{
	// 			'type': 'String',
	// 			'required': 'false'
	// 		};
	// 		var modified =
	// 		{
	// 			'type': 'Date',
	// 			'default': 'Date.Now'
	// 		};
	// 		var analytics =
	// 		{
	// 			'type': 'ObjectID',
	// 			'required': 'true'
	// 		};
	// 		return {
	// 			getProductSchema: function(){
	// 				var productSchema = new Schema(guid, asin);
	// 			}
	// 		};
	// 	})();

	// 	var analyticsSchema = (function(){
	// 		var id =
	// 		{
	// 			'type': 'ObjectID',
	// 			'required': 'true'
	// 		};

	// 		return {

	// 		};
	// 	})();

	// })();







	//asin = 10 character length String 



// 	var queries = (function(){
// 		var productDatabase = 'productsdb';
// 		var productCollection = ['products'];

// 		return {
// 			createProduct : function(dbHandler, product){
// 				var db = dbHandler(productDatabase);
// 				var collection = db.collection(productCollection);

// 			},
// 			readProductByAmazonID : function(dbHandler, amazonID){

// 			},
// 			readProductByTag : function(dbHandler, itemTag){

// 			},
// 			readDatabase : function(dbHandler){
// 				var db = dbHandler(productDatabase);
// 				var collection = db.collection(productCollection);
// 				db.collection.find(function(err, docs){
// 					if (err || !docs){
// 						console.log("Failed to find products");
// 					} else {
// 						var results = [];
// 						docs.foreach(function(doc){
// 							//results.append()
// 						})
// 					}
// 				});
// 			},
// 			updateProduct : function(dbHandler, product){

// 			},
// 			deleteProduct : function(dbHandler, productID){

// 			}
// 		};
// 	})();

// 	var productValidation = (function(){
		
// 		return {

// 		};
// 	})();

// 	var productSchema = (function(){









// 		var guid =
// 		{
// 			'id':{'type':'number', 'required':'true'};
// 		};
// 		var asin = 
// 		{
// 			'asin':{'type':'number'}
// 		}
// 		var asin;
// 		var tags;
// 		var images;
// 		var analytics;





// 		//Unique guid for every element within the database
// 		var id = {'id':{'type':'number', 'required':'true'}};
// 		//Unique AmazonID of the product object
// 		var amazonID = {'amazonID':{'type':'number', 'required':'true'}}; 
// 		//List of possible tagged names used for the product		
// 		var tags = {'tags':{'type':'list','listType':'string','required':'true'}};
// 		//List of images associated with product
// 		var images = {'images':{'type':'list','listType':'image','required':'true'}};
// 		//List of analytical objects for the product
// 		var analytics = {'analytics':{'type':'list','listType':'analytic','required':'true'}};

// 		return {
// 			getID : function(){
// 				return id['id'];
// 			},
// 			getAmazonID : function(){
// 				return amazonID['amazonID'];
// 			},
// 			getTags : function(){
// 				return tags['tags'];
// 			},
// 			getImages : function(){
// 				return images['images'];
// 			},
// 			getAnalytics : function(){
// 				return analytics['analytics'];
// 			}
// 		};

// 	})();

// 	function validateAmazonID(amazonID, requirements){
// 		var errorLog = [];
// 		if (typeof requirements === 'object'){
// 			if (typeof amazonID !== requirements.type || typeof amazonID === 'undefined'){
// 				errorLog.push('type');
// 				errorLog.push('required');
// 			}
// 		} else {
// 			errorLog.push('requirements');
// 		}
// 		return errorLog.length > 0 ? errorLog : undefined;
// 	}
// 	function validateTag(tag, requirements){
// 		var errorLog = [];
// 		if (typeof requirements === 'object'){
// 			if (typeof tag !== requirements.type || typeof tag === 'undefined'){
// 				errorLog.push('type');
// 				errorLog.push('required');
// 			}
// 		} else {
// 			errorLog.push('requirements');
// 		}
// 		return errorLog.length > 0 ? errorLog : undefined;
// 	}
// 	function validateTags(tags, requirements){
// 		var errorLog = [];
// 		if (!Array.isArray(tags)){
// 			errorLog.push('type');
// 		} else {
// 			for(var i = 0; i < tags.length; i++){
// 				errorLog.push(validateTag(tags[i], requirements));
// 			}
// 		}
// 		return errorLog.length > 0 ? errorLog : undefined;
// 	}
// 	function validateImage(image, requirements){
// 		var errorLog = [];
// 		return errorLog;

// 	}
// 	function validateImages(images, requirements){

// 	}
// 	function validateAnalytic(analytic, requirements){
// 		var errorLog = [];
// 		return errorLog;
// 	}
// 	function validateAnalytics(analytics, requirements){

// 	}
// 	//Mongoose
// 	var productDatabaseURL = 'mongodb://localhost/product';

// 	var productDatabase = 'productsdb';
// 	var productCollection = ['products'];

// 	return {

// 		//Function to return a schema for the front end. 
// 		//Validation and stuff will work this way

// 		getSchema : function(){
// 			return [productSchema.getID(), productSchema.getAmazonID(), productSchema.getTags(), productSchema.getImages(), productSchema.getAnalytics()];
// 		},
// 		validateProduct : function(product){
// 			//Validate each section of the json object and then add to database
// 		},
// 		addProduct : function(dbHandler, product){

// 		},
// 		getProduct : function(dbHandler, index){

// 		},
// 		deleteProduct : function(dbHandler, index){

// 		},
// 		createProduct: function(jsonFactory, amazonID, tags, images, analytics){
// 			var schema = new productSchema();
// 			var error = {};
// 			error.amazonID = validateAmazonID(amazonID, schema.getAmazonID());
// 			error.tags = validateTags(tags, schema.getTags());
// 			error.images = validateImages(images, schema.getImages());
// 			error.analytics = validateAnalytics(analytics, schema.getAnalytics());
// 			if (Object.keys(error).length > 0){
// 				return error;
// 			} else {
// 				var input = [amazonID, tags, images, analytics];
// 				var json;
// 				if (typeof (json = jsonFactory.createJSON(schema, input)) === 'undefined'){
// 					error.json = 'error';
// 					return error;
// 				}
// 				return json;
// 			}
// 		},
// 		getDatabaseURL : function(){
// 			return productDatabaseURL;
// 		}
// 	};
// }();
