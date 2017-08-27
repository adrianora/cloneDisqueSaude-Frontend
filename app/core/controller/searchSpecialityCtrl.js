app.controller("searchSpecialityCtrl", function ($scope,apiAddSpecialityService,toastr){

	$scope.unidades;
	$scope.especialidade;

	$scope.searchUnitForSpeciality = function (descricao) {
            apiAddSpecialityService.buscarUnidadePorEspecialidade(descricao).then(function success(response) {
                $scope.unidades = response.data;
                $scope.especialidade = descricao;
            }, function error(error) {
                toastr.error("Especialidade não existe!");
                console.log(error.data.errorMessage);
            });
    }

});