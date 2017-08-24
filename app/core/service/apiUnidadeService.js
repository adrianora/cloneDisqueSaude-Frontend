app.service("apiUnidadeService",function($http){

	this.getApiUnidade = function(neighborhood){
		return $http.get("http://localhost:5000/SpringBootRestApi/api/unidade/busca?bairro=" + neighborhood);
	};

	this.cadastrarUnidade = function(unidade){
		return $http.post("http://localhost:5000/SpringBootRestApi/api/unidade", JSON.stringify(unidade));
	};


});