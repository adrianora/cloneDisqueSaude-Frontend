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
});