//AJAX requests to populate the main form
//This guy will initialize the main page of the website
//It will make an AJAX request to the server, the server will read all of the required files and return


window.onload = function(){
	var httpRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	getModules();

};

function initializeForm(){
	var body = document.createElement('body');
	var wrapper = document.createElement('wrapper');
	var pusher = document.createElement('pusher');
	var header = document.createElement('header');
	var footer = document.createElement('footer');
}
function initializeBody(body){

}


function requestBody(httpRequest){

}

function getModules(){
	var httpRequest;
	var moduleRequests = {'modules':{'stylesheets':[{'resource':'body'},{'resource':'footer'},{'resource':'header'}]}};
	var stylesheets = moduleRequests.modules.stylesheets;
	for (var key in stylesheets){
		if (stylesheets.hasOwnProperty(key)){
			var requestModule = stylesheets[key];
			httpRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
			addModule(httpRequest, requestModule, 'stylesheet');
		}
	}
}
function addModule(httpRequest, moduleResource, moduleType){
	httpRequest.onreadystatechange = function(){
		if (httpRequest.readyState === 4 && httpRequest.status === 200){
			var response = httpRequest.response;
			var fileRef = document.createElement('link');
			fileRef.setAttribute('rel', 'stylesheet');
			fileRef.setAttribute('type', 'text/css');
			fileRef.setAttribute('href', response);
			document.getElementsByTagName('head')[0].appendChild(httpRequest.response);
			//loadResource(httpRequest.response);
		}
	};
	var endpoint = 'http://localhost:3000/initialization/modules';
	httpRequest.open('post', endpoint, true);
	httpRequest.setRequestHeader('Content-Type', 'application/json');
	var moduleRequest;
	if (moduleType === 'stylesheet'){
		moduleRequest = {'type':'stylesheet'};
	} else if (moduleType === 'javascript'){
		moduleRequest = {'type':'javascript'};
	}
	if (typeof moduleRequest !== 'undefined'){
		for(var key in moduleResource){
			moduleRequest[key] = moduleResource[key];
		}
		httpRequest.send(JSON.stringify(moduleRequest));
	}
}

function loadResource(filePath){
	var fileRef;
	if (fileExtension === 'js'){
		fileRef = document.createElement('script');
		fileRef.setAttribute('type','text/javascript');
		fileRef.setAttribute('src','filePath');
	} else if (fileExtension === 'css'){
		fileRef = document.createElement('link');
		fileRef.setAttribute('rel','stylesheet');
		fileRef.setAttribute('type','text/css');
		fileRef.setAttribute('href',filePath);
	} else {
		if (typeof fileExtension !== 'undefined'){
			document.getElementsByTagName('head')[0].appendChild(fileRef);
		}
	}
}

