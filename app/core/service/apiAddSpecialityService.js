app.service("apiAddSpecialityService",function($http){

	this.addEspecialidade = function(especialidade){
		return $http.post("https://clonedisquesaudebackend.herokuapp.com/SpringBootRestApi/api/especialidade", JSON.stringify(especialidade))
	};

	this.buscarUnidadePorEspecialidade = function(descricao){
		return $http.get("https://clonedisquesaudebackend.herokuapp.com/SpringBootRestApi/api/especialidade/unidade/" + descricao);
	};

});

