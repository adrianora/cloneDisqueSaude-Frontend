app.controller("changeCityHallSituationCtrl", function ($scope,apiPrefeituraService,toastr) {

	$scope.situation = "";

	$scope.changeCityHallSituation = function(status){
		var newStatus = getNewStatus(status);
		changeSituation(newStatus.situacao);
		apiPrefeituraService.changeCityHallSituation(newStatus).then(function success(response) {
            }, function failed(error) {
                console.log("Erro na MUDANCA da situacao da prefeitura");
                console.log(error.data.errorMessage);
            });
		toastr.info("Situação da prefeitura alterada para " + newStatus.situacao);
	}

	var getNewStatus = function(status){
		if(status == 1){
			return {
				situacao : "NORMAL"
			}
		}else if(status == 2){
			return {
				situacao : "EXTRA"
			}
		}
		return {
				situacao : "CAOS"
			}
	};

	var getCityHallSituation = function () {
            apiPrefeituraService.getCityHallSituation().then(function success(response) {
                changeSituation(response.data);
            }, function failed(error) {
                console.log("Erro na busca da situacao da prefeitura");
                console.log(error.data.errorMessage);
            });
    };

    var changeSituation = function(date){

    	if(date == "CAOS"){

            $scope.situation = {
                status: "CAOS",
                color: "label-danger"
            }

        } else if(date == "EXTRA"){
            $scope.situation = {
                status: "EXTRA",
                color: "label-primary"
            }
        } else {
            $scope.situation = "";
            $scope.situation = {
                status: "NORMAL",
                color: "label-success"
            }
                    
        };

    };

    $scope.getSituation = function(){
    	return $scope.situation.status;
    };

    getCityHallSituation();

});