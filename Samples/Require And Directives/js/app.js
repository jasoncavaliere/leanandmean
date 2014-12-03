define(['angular'], function (angular) {
    'use strict';
    var app = angular.module("app", []);

    app.directive('topNavigation', function() {
        return {
            templateUrl: 'directives/nav.html',
            scope:true
        };
    });

    app.controller('mainController',['$scope',function($scope){
        $scope.greetMe="AMD world!"
    }]);
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
    });
    return app;
});