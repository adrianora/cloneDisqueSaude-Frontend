app.service("apiUnidadeService",function($http){

	this.getApiUnidade = function(neighborhood){
		return $http.get("http://localhost:5000/SpringBootRestApi/api/unidade/busca?bairro=" + neighborhood);
	};

});