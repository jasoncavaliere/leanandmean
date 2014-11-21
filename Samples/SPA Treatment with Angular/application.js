var app = angular.module("techFu", []);
var apiRoot = "http://localhost:8080/";
var callbackVariable = 'callback=JSON_CALLBACK';

//Header
app.controller('headerController', ['$scope','$http', function($scope,$http) {
    $scope.title = 'Components of an application';
}]);

//Navigation
app.controller('navController', ['$scope','$http', function($scope,$http) {
    $scope.links = [
        {text:'Home',href:'#'},
        {text:'Link 1',href:'#'},
        {text:'Link 2',href:'#'},
        {text:'link 3',href:'#'},
    ];

}]);

//Footer
app.controller('footerController', ['$scope','$http', function($scope,$http) {
    $scope.footerMessage = 'Thanks for visiting our site!'
    $scope.footerLinks = [
        {text:'Home',href:'#'},
        {text:'Footer Link 1',href:'#'},
        {text:'Footer Link 2',href:'#'},
        {text:'Footer Link 3',href:'#'},
    ];

}]);


//Main Body
app.controller('mainController', ['$scope','$http', function($scope,$http) {
    $scope.message = 'Welcome to the wonderful world of MVVM!';
    $http.jsonp(apiRoot + 'users?' + callbackVariable).
        success(function(data, status, headers, config) {
            $scope.users = data;
            $scope.message="Hello Angular! Users were successfully loaded!";
        }).
        error(function(data, status, headers, config) {
            app.error = true;
        });
}]);