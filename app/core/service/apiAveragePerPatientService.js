app.service("apiAveragePerPatientService",function($http){

	this.getApiGeralMedicos = function(id){
		return $http.get("https://clonedisquesaudebackend.herokuapp.com/SpringBootRestApi/api/unidade/media/" + id);
	}

});