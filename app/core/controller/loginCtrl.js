app.controller("loginCtrl", function ($scope,$http){

	$scope.userLogado;

	//por enquanto
	$scope.autenticar = function(login,senha){
		$scope.userLogado = {};
		console.log($scope.isLogado());
		alert("Adm logado!");
	};

	$scope.deslogar = function(){
		$scope.userLogado = undefined;
	};

	$scope.isLogado = function(){
		return !!$scope.userLogado;
	};

	/*
	$scope.autenticar = function(login,senha){
		var adms = $scope.searchAveragePerPatient();
		var encontrado = false;
		for (var i = 0; i < adms.length; i++) {
			adm = adms[i];
			if(adm.login === login && adm.senha === senha){
				$scope.userLogado = adm;
				alert("Administrador logado!");
				encontrado = true;
				break;
			}
		}
		if(!encontrado){
			alert("Administrador não encontrado");
		}

	}
	*/

	$scope.searchAveragePerPatient = function () {
        $http.get("http://localhost:5000/SpringBootRestApi/administradores").then(function successCallback(response) {
            return response.data.obj;
        }, function errorCallback(error) {
            console.log("Unidade Não Encontrada");
        });
    }


});
