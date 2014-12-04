define(['angular','pageFramework'], function (angular) {
    'use strict';
    var app = angular.module("app", ['globalModule']);
    app.directive('ngNavigation', function() {return {templateUrl: 'directives/nav.html',scope:true};});
    app.directive('ngHeader', function() {return {templateUrl: 'directives/header.html',scope:true};});
    app.directive('ngFooter', function() {return {templateUrl: 'directives/footer.html',scope:true};});

    app.controller('mainController',['$scope','pageFramework',function($scope,pageFramework){
        pageFramework.setPageFramework($scope);
        $scope.greetMe="AMD world!";

        //This would be a call to the API...
        $scope.users=[
            {firstName: 'De',lastName: 'La Soul'},
            {firstName: 'Rick',lastName: 'James'},
            {firstName: 'James',lastName: 'Brown'}
        ];
    }]);
    angular.element(document).ready(function() {angular.bootstrap(document, ['app']);});
    return app;
});