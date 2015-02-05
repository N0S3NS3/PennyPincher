// module.exports = function(){

// 	var initialization = function(){
// 		var getCommands = 
// 		{
// 			index: 
// 			[{
// 				'/':{'permissions':'base', 'arguments':'null'}
// 			}]
// 		};
// 	};

// 	return {
// 		getAPICommands : function(){
// 			return initialization.getCommands();
// 		}
// 	};

// };

var initialization = (function(){
	return {
		getAPICommands : function(){
			return {'mojo':'isFat'};
		}
	};
})();

module.exports.getAPICommands = initialization.getAPICommands(); 

// module.exports = {

	

// 	getInit : function(){
// 		return 'hello';
// 	}
// };

// var cat = function(){

// };