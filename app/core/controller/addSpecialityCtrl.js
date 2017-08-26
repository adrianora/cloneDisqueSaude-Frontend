app.controller("addSpecialityCtrl", function ($scope,apiAddSpecialityService,toastr,$location){

	$scope.addEspecialidade = function(especialidade){
		apiAddSpecialityService.addEspecialidade(especialidade).then(function success(response) {
                toastr.success("Especialidade cadastrada com sucesso!");
            }, function error(error) {
            	toastr.error("Especialidade já existe!");
                console.log(error);
            });
	}

});


