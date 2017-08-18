app.controller("searchHealthUnitCtrl", function ($scope, apiUnidadeService) {

    $scope.units = [];

    $scope.searchHU = function (neighborhood) {
        
            apiUnidadeService.getApiUnidade(neighborhood).then(function success(response) {
                $scope.units = response.data;
                console.log("Foram encontradas Unidades de saúde");
                console.log(response.data);
            }, function failed(error) {
                console.log("Erro na busca de unidades");
                console.log(error.data.errorMessage);
            });
    }
});