define([
    'angularAMD',
    'factories/routeTable',
    'angular-ui-router',
    'directives/styles',
    'directives/header',
    'directives/footer',
    'directives/nav'
], function (angularAMD,routes) {
    'use strict';
    var app = angular.module("webapp", ['ui.router']);

    app.service('authenticationService',function() {
        var service = {};
        service.isAuthenticated=function(){
            return false;
        };
        return service;
    });
    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home',routes.unauthenticated.home)
            .state('about',routes.authenticated.about)
        ;
    });

    app.run(function ($rootScope, $state, authenticationService) {
        $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
            if (toState.authenticate && !authenticationService.isAuthenticated()) {
                // User isn’t authenticated
                $state.transitionTo("home");
                event.preventDefault();
            }
        });
    });

    angularAMD.bootstrap(app,false,document.getElementById('mainView'));
    return app;
});