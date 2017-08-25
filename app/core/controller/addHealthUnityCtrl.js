app.controller("addHealthUnityCtrl", function ($scope, apiUnidadeService,toastr, $location){

	$scope.tipo = "posto";

	$scope.cadastrarUnidade = function(unidade){
		unidade.type = $scope.tipo;
		unidade.tipo = tipoDaUnidade();
            apiUnidadeService.cadastrarUnidade(unidade).then(function success(response) {
                toastr.success("Unidade cadastrada com sucesso!");
                $location.path('/createdUnit/' + response.data.id);
            }, function error(error) {
                console.log(error);
                console.log("Problemas ao tentar adicionar queixa.");
            });
	}

	$scope.setTipo = function(tipo){
		$scope.tipo = tipo;
		toastr.info("Unidade alterada para " + tipoDaUnidade(tipo));
	}

	var tipoDaUnidade = function(){
		if($scope.tipo == "posto"){
			return "Posto De Saude";
		}
		return "Hospital";
	}


});