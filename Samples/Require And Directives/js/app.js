define(['angular','pageFramework'], function (angular) {
    'use strict';
    var app = angular.module("app", ['globalModule']);
    app.directive('ngNavigation', function() {return {templateUrl: 'directives/nav.html',scope:true};});
    app.directive('ngHeader', function() {return {templateUrl: 'directives/header.html',scope:true};});
    app.directive('ngFooter', function() {return {templateUrl: 'directives/footer.html',scope:true};});

    app.controller('mainController',['$scope','$http','pageFramework',function($scope,$http,pageFramework){
        pageFramework.setPageFramework($scope);
        $scope.greetMe="AMD world!";

        //This would be a call to the API...
        $scope.users=[
            {firstName: 'jason',lastName: 'cavaliere'},
            {firstName: 'jason',lastName: 'cavaliere'},
            {firstName: 'jason',lastName: 'cavaliere'}
        ];
    }]);
    angular.element(document).ready(function() {angular.bootstrap(document, ['app']);});
    return app;
});