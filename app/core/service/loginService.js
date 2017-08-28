app.service("loginService",function($http){

	var logado = false;

	this.autenticar = function(adm){
		return $http.post("https://clonedisquesaudebackend.herokuapp.com/SpringBootRestApi/api/login", JSON.stringify(adm));
	}

	this.setStatus = function(status){
		logado = status;
	}

	this.getStatus = function(){
		return logado;
	}


});