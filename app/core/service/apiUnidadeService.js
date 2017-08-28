app.service("apiUnidadeService",function($http){

	this.getApiUnidade = function(neighborhood){
		return $http.get("https://clonedisquesaudebackend.herokuapp.com/SpringBootRestApi/api/unidade/busca/" + neighborhood);
	};

	this.cadastrarUnidade = function(unidade){
		return $http.post("https://clonedisquesaudebackend.herokuapp.com/SpringBootRestApi/api/unidade", JSON.stringify(unidade));
	};


});