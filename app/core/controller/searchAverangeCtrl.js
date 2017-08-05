app.controller("searchAverangeCtrl", function ($scope, apiAveragePerPatientService) {

    $scope.average = null;

    $scope.searchAveragePerPatient = function (id) {
        apiAveragePerPatientService.getApiGeralMedicos(id).then(function successCallback(response) {
            $scope.average = response.data.obj;
        }, function errorCallback(error) {
            console.log("Unidade Não Encontrada");
        });
    }
});