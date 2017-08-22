app.service("apiPrefeituraService",function($http){

	this.getGeralComplaintSituation = function(){
		return $http.get("http://localhost:5000/SpringBootRestApi/api/prefeitura");
	};

	this.getCityHallSituation = function(){
		return $http.get("http://localhost:5000/SpringBootRestApi/api/prefeitura/status");
	};

	this.changeCityHallSituation = function(prefeitura){
		return $http.put("http://localhost:5000/SpringBootRestApi/api/prefeitura", JSON.stringify(prefeitura));
	};

});