var app = angular.module("techFu", []);
var apiRoot = "http://localhost:8080/";
var callbackVariable = 'callback=JSON_CALLBACK';

//Header
app.controller('headerController', ['$scope','$http', function($scope,$http) {
    $scope.title = 'Logging In';
}]);

//Navigation
app.controller('navController', ['$scope','$http', function($scope,$http) {
    $scope.links = [
        {text:'Home',href:'#'},
        {text:'Login',href:'#'}

    ];

}]);

//Footer
app.controller('footerController', ['$scope','$http', function($scope,$http) {
    $scope.footerMessage = 'Thanks for visiting our site!'
    $scope.footerLinks = [
        {text:'Home',href:'#'},
        {text:'Login',href:'#'}
    ];

}]);

//Main Body

app.controller('mainController', []);

var controllerFunction = function($scope,$http) {
    $scope.message = 'Welcome to the wonderful world of MVVM!';
    $http.jsonp(apiRoot + 'users?' + callbackVariable).
        success(function(data, status, headers, config) {
            $scope.users = data;
            $scope.message="Hello Angular! Users were successfully loaded!";
        }).
        error(function(data, status, headers, config) {
            app.error = true;
        });
}




app.run(function($rootScope) {
    app.controller('mainController', ['$scope','$http', controllerFunction]);
});