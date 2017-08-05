app.controller("registerComplaintCtrl", function ($scope, apiComplaintService, toastr, $location) {

    $scope.registerComplaint = function (complaint) {
            apiComplaintService.postApiComplaint(complaint).then(function success(response) {
                toastr.success("Queixa adicionada com sucesso!");
                $location.path('/createdcomplaint/' + response.data.id);
            }, function error(error) {
                console.log(error);
                console.log("Problemas ao tentar adicionar queixa.");
            });
    }
});