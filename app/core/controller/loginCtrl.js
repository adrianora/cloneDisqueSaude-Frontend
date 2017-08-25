app.controller("loginCtrl", function ($scope,loginService,$location){

	$scope.isLogado = function(){
		return loginService.getStatus();
	};

	$scope.autenticar = function(adm){
		$scope.login(adm);
	}

	$scope.deslogar = function(){
		loginService.setStatus(false);
	}

	$scope.login = function (adm) {
        loginService.autenticar(adm).then(function successCallback(response) {
        	loginService.setStatus(true);
        	$location.path('#/!');
     		alert("Login efetuado com sucesso");
        }, function errorCallback(error) {
        	alert("Email ou senha incorretos");
            console.log("Falha no login");
        });
    }


});
