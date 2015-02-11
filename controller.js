var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {
    var getData = function() {
        $scope.users = mainService.getUsers();
    }
    getData();
    console.log($scope.users);
});