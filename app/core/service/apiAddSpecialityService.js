app.service("apiAddSpecialityService",function($http){

	this.addEspecialidade = function(especialidade){
		return $http.post("http://localhost:5000/SpringBootRestApi/api/especialidade", JSON.stringify(especialidade))
	};

});

