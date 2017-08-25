app.controller("messageCreatedComplaintCtrl", function ($scope, $routeParams) {
    $scope.responseComplaintId = "";
    var showMessage = function () {
        $scope.responseComplaintId = $routeParams.id;
    }

    showMessage();
});

app.controller("messageCreatedUnitCtrl", function ($scope, $routeParams) {
    $scope.responseUnitId = "";
    var showMessage = function () {
        $scope.responseUnitId = $routeParams.id;
    }

    showMessage();
});
