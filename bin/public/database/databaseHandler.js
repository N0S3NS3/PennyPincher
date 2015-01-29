modules.exports = function(){

	var mongoose = require('mongoose');
	var path;
	var database;
	return {
		databaseConnect:function(databaseUrl){
			path = databaseUrl;
			mongoose.connect(path);
			database = mongoose.connection;
			database.on('error', console.error.bind(console. 'connection error:'));
			database.once('open', function(){

			});
		}
	};

}();