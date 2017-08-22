app.controller("generalSituationComplaintsCtrl", function ($scope, apiPrefeituraService) {

    $scope.situation = "";

    var getGeneralSituationComplaints = function () {
            apiPrefeituraService.getGeralComplaintSituation().then(function success(response) {
                getSituation(response.data);
            }, function failed(error) {
                console.log("Erro na busca de unidades");
                console.log(error.data.errorMessage);
            });
    };

    var getSituation = function(date){

        if(date == "RUIM"){

            $scope.situation = {
                status: "RUIM",
                color: "label-danger"
            }

        } else if(date == "REGULAR"){
            $scope.situation = {
                status: "REGULAR",
                color: "label-primary"
            }
        } else {
            $scope.situation = "";
            $scope.situation = {
                status: "BOM",
                color: "label-success"
            }
                    
        };

    };

    getGeneralSituationComplaints();

});