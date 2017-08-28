app.service("apiPrefeituraService",function($http){

	this.getGeralComplaintSituation = function(){
		return $http.get("https://clonedisquesaudebackend.herokuapp.com/SpringBootRestApi/api/prefeitura");
	};

	this.getCityHallSituation = function(){
		return $http.get("https://clonedisquesaudebackend.herokuapp.com/SpringBootRestApi/api/prefeitura/status");
	};

	this.changeCityHallSituation = function(prefeitura){
		return $http.put("https://clonedisquesaudebackend.herokuapp.com/SpringBootRestApi/api/prefeitura", JSON.stringify(prefeitura));
	};

});