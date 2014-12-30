define(['common','factories/routeTable','factories/loginService'], function (angularAMD,routes) {
    'use strict';
    var app = angular.module("webapp", ['ui.router']);
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home',routes.unauthenticated.home)
            .state('about',routes.authenticated.about)
        ;
    });
    app.run(['$rootScope','$state','loginService',function ($rootScope, $state,loginService) {
        $rootScope.loginService = loginService;
        $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
            if (toState.authenticate && ! $rootScope.loginService.isAuthorized(toState))
            {
                $state.transitionTo("home");
                event.preventDefault();
            }
        });
    }]);
    angularAMD.bootstrap(app,false,document.getElementById('mainView'));
    return app;
});