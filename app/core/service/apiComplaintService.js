app.service("apiComplaintService",function($http){

	this.postApiComplaint = function(complaint){
		return $http.post("http://localhost:5000/SpringBootRestApi/api/queixa/", JSON.stringify(complaint));
	};

	this.getApiComplaint = function(id){
		return $http.get("http://localhost:5000/SpringBootRestApi/api/queixa/" + id);
	};

	this.getGeralComplaintSituation = function(){
		return $http.get("http://localhost:5000/SpringBootRestApi/api/geral/situacao");
	};

	this.getAllApiComplaints = function(){
		return $http.get("http://localhost:5000/SpringBootRestApi/api/queixa");
	};

});