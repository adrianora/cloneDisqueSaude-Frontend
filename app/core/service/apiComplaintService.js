app.service("apiComplaintService",function($http){

	this.postApiComplaint = function(complaint){
		return $http.post("https://clonedisquesaudebackend.herokuapp.com/SpringBootRestApi/api/queixa/", JSON.stringify(complaint));
	};

	this.getApiComplaint = function(id){
		return $http.get("https://clonedisquesaudebackend.herokuapp.com/SpringBootRestApi/api/queixa/" + id);
	};

	this.getAllApiComplaints = function(){
		return $http.get("https://clonedisquesaudebackend.herokuapp.com/SpringBootRestApi/api/queixa");
	};

	this.closeComplaint = function(complaint){
		return $http.put("https://clonedisquesaudebackend.herokuapp.com/SpringBootRestApi/api/queixa/fechamento", JSON.stringify(complaint));
	};

});