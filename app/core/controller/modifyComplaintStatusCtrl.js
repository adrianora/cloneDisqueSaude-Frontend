app.controller("modifyComplaintStatusCtrl", function ($scope,apiComplaintService){

	$scope.complaints = [];

	$scope.listAllComplaints = function () {
        apiComplaintService.getAllApiComplaints().then(function successCallback(response) {
            $scope.complaints = response.data;
        }, function errorCallback(error) {
            console.log(error);
        });
    };

    $scope.listAllComplaints();

    $scope.fecharQueixa = function(complaint){
    	apiComplaintService.closeComplaint(complaint).then(function successCallback(response) {
    		$scope.listAllComplaints();
    		alert("Queixa fechada com sucesso.");
        }, function errorCallback(error) {
            console.log(error);
        });
    }
});