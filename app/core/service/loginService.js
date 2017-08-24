app.service("loginService",function($http){

	var logado = false;

	this.autenticar = function(adm){
		return $http.post("http://localhost:5000/SpringBootRestApi/api/login", JSON.stringify(adm));
	}

	this.setStatus = function(status){
		logado = status;
	}

	this.getStatus = function(){
		return logado;
	}


});