app.controller("searchComplaintCtrl", function ($scope, apiComplaintService) {

    $scope.complaint;

    $scope.searchComplaint = function (id) {
        apiComplaintService.getApiComplaint(id).then(function successCallback(response) {
            $scope.complaint = response.data;
        }, function errorCallback(error) {
            $scope.complaint = null;
            console.log(error);
        });
    }
});