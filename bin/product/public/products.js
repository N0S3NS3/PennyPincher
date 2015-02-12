var product = function(){

	var mongoose = require('mongoose');

	var databaseHandler = (function(){
		var dbHost;

		var connect = function(){
			mongoose.connect(dbHost, function(err){
				if (err){
					//log this error
					throw err;
				}
			});
		};

		return {
			postProduct: function(product){
				connect();
				product.save(function(err){

				});
			},
			getProduct: function(reqType, reqArgs){
				if (reqType === 'idType'){

				} if (reqType === 'productID'){

				} if (reqType === 'tag'){

				}
			}
		};
	})();

	var schemaHandler = function(){

		var product = function(){

			var amazonIDEnums = 'asin isbn upc gtin'.split(' ');
			
			var amazonIDSchmea = {
				idType: {type: String},
				productID: {type: String}
			};

			var asin = function(){
				this.min = 10;
				this.max = 10;
				this.regex = '^[a-zA-Z0-9]+';
			};
			var isbn = function(){
				this.min = 10;
				this.max = 13;
				this.regex = '/\b(?:ISBN(?:: ?| ))?((?:97[89])?\d{9}[\dx])\b/i'; //http://stackoverflow.com/questions/14095778/regex-differentiating-between-isbn-10-and-isbn-13
			};
			var upc = function(){
				var min = 12;
				var max = 12;
				this.validate = function(productID){

				};
			};
			var gtin = function(){
				var min = 14;
				var max = 14;
				this.validate = function(productID){

				};
			};

			var getProductIDValidator = function(productID){
				switch(productID){
					case 'asin':
						return new asin();
					case 'isbn':
						return new isbn();
					case 'upc':
						return new upc();
					case 'gtin':
						return new gtin();
					default:
						return null;
				}
			};

			var amazonIDValidation = function(amazonID){
				var length = amazonIDEnums;
				for(var i = 0; i < length; i++){
					if (amazonID.idType === amazonIDEnums[i]){
						var validator = getProductIDValidator(amazonID.idType);
						if (validator !== null && (typeof(validator) !== 'undefinde')){
							var min = validator.
						}







						if (validator !== null){
							return validator.validate(amazonID);
						}
					}
				}
				return false;
			};

			this.productSchema = mongoose.Schema({
				amazonID: {type: amazonIDSchema, required: true, validate: [amazonIDValidation, 'Amazon ID Not Valid']},
				tags: {type: [String], required: true},
				images: {type: [String], required: true}, //How do we store images?
				analytics: {type: Schema.Types.ObjectId, required: true, ref: 'Analytic'}		
			});

		};
		var analytic = function(){

			this.analyticSchema = mongoose.Schema({
				timestamp: {type: Date, required: true}
			});

		};

		this.Product = mongoose.model('Product', product.productSchema);
		this.Analytic = mongoose.model('Analytic', analytic.analyticSchema);

	};

module.exports = product;

};