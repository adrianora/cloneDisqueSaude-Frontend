app.service()app.service("apiAveragePerPatientService",function($http){

	this.getApiGeralMedicos = function(id){
		return $http.get("http://localhost:5000/SpringBootRestApi/api/geral/medicos/" + id);
	};

});