module.exports = function(){
	
	var mongoJS = require('mongojs');

	var mongoHandler = function(mongoHandler, mongoURI){
		var handler = mongoHandler;
		var uri = mongoURI;

		//CRUD functions
		this.create = function(createQuery){

		},
		this.read = function(readQuery){

		},
		this.update = function(updateQuery){

		}
		this.delete = function(deleteQuery){

		}
	};

	return {
		getMongoHandler : function(mongoURI){
			return new mongoHandler(mongoJS, mongoURI);
		}
	};
};