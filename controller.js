var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {
    $scope.page = 3;
    var getData = function() {
        mainService.getUsers($scope.page).then(function(data) {
            $scope.users = data;
            console.log($scope.users);
        });
    }
    getData();
    
});