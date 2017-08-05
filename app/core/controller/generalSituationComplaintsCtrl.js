app.controller("generalSituationComplaintsCtrl", function ($scope, apiComplaintService) {

    $scope.situation = "";

    var getGeneralSituationComplaints = function (neighborhood) {
            apiComplaintService.getGeralComplaintSituation().then(function success(response) {
                console.log(response.data.obj);
                getSituation(response.data.obj);
            }, function failed(error) {
                console.log("Erro na busca de unidades");
                console.log(error.data.errorMessage);
            });
    };

    var getSituation = function(date){

        if(date == 0){

            $scope.situation = {
                status: "RUIM",
                color: "label-danger"
            }

        } else if(date == 1){
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