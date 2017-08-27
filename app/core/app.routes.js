app.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl: "view/search.html"
    }).when("/complaint/register", {
        templateUrl: "view/registerComplaint.html",
        controller : "registerComplaintCtrl",
    }).when("/searchcomplaint", {
        templateUrl : "view/search_complaint.html",
        controller: "searchComplaintCtrl"
    }).when("/search_health_unit", {
        templateUrl: "view/searchHealthUnit.html",
        controller : "searchHealthUnitCtrl",
    }).when("/searchaverage",{
        templateUrl : "view/search_average_per_patient.html",
        controller: "searchAverangeCtrl"
    }).when("/createdcomplaint/:id", {
        templateUrl : "view/successPage.html",
        controller : "messageCreatedComplaintCtrl"
    }).when("/generalSituationComplaints", {
        templateUrl : "view/generalSituationComplaints.html",
        controller : "generalSituationComplaintsCtrl"
    }).when("/login", {
        templateUrl : "view/login.html",
        controller : "loginCtrl"
    }).when("/modifyComplaintStatus", {
        templateUrl : "view/modifyComplaintStatus.html",
        controller : "modifyComplaintStatusCtrl"
    }).when("/changeCityHallSituation", {
        templateUrl : "view/changeCityHallSituation.html",
        controller : "changeCityHallSituationCtrl"
    }).when("/addHealthUnity", {
        templateUrl : "view/addHealthUnity.html",
        controller : "addHealthUnityCtrl"
    }).when("/createdUnit/:id", {
        templateUrl : "view/sucessPageUnit.html",
        controller : "messageCreatedUnitCtrl"
    }).when("/addSpeciality", {
        templateUrl : "view/addSpeciality.html",
        controller : "addSpecialityCtrl"
    }).when("/search_speciality", {
        templateUrl : "view/searchSpeciality.html",
        controller : "searchSpecialityCtrl"
    }).otherwise({
        redirectTo: '/'
    });
});
