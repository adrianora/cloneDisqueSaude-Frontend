app.controller("registerComplaintCtrl", function ($scope, apiComplaintService, toastr, $location) {

	$scope.tipoQueixa = "alimento";

    $scope.registerComplaint = function (complaint) {
    		complaint.tipo = $scope.tipoQueixa;
            apiComplaintService.postApiComplaint(complaint).then(function success(response) {
                toastr.success("Queixa adicionada com sucesso!");
                $location.path('/createdcomplaint/' + response.data.id);
            }, function error(error) {
                console.log(error);
                console.log("Problemas ao tentar adicionar queixa.");
            });
    }

    $scope.setTipo = function(tipo){
    	$scope.tipoQueixa = tipo;
        toastr.info("Tipo mudado para " + tipo);
    }

});