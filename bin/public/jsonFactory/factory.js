module.exports = function(){

	var jsonObject = function(){
		var _key;
		var _value;

		this.setKey = function(jsonKey){
			_key = jsonKey;
		},
		this.setValue = function(jsonValue){
			_value = jsonValue;
		},
		this.getKey = function(){
			return _key;
		},
		this.getValue = function(){
			return _value;
		},
		this.toJSON = function(){
			var stringify = '{'+_key.toString()+':'+_value.toString()+'}';
			return JSON.stringify(stringify);
		};
	};

	var validateKey = function(key){
		return true;
	};
	var validateValue = function(value){
		return true;
	};

	return {
		createJSON : function(key, value){
			var obj = new jsonObject();
			if (validateKey(key) && validateValue(value)){
				obj.setKey(key);
				obj.setValue(value);
				return obj;
			}
			return undefined;
		},
		createSkeletonArray : function(keys){
			var skeletonArray = Array(keys.length);
			console.log(skeletonArray);
			for(var i = 0; i < keys.length; i++){
				skeletonArray.push(this.createJSON(keys[i], ''));
			}
			return skeletonArray;
		},
		validateJSONArgs : function(key, value){

		},
		validateJSON : function(jsonObject){

		},	
		getJSON : function(){
			var json = new jsonObject();
			return json;
		},
		//***************************************************************************
		// createJSON accepts a schema object and an array of input. Depending on the 
		// results of validation, function will return an appropriate JSON object.
		//***************************************************************************
		createJSONObject:function(schema, input){
			if (typeof schema === 'object' && typeof input === 'object'){
				
			}
			return false;
		}
	};
}();