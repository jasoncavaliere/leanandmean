define([
    'angularAMD',
    'angular-ui-router',
    'directives/styles',
    'directives/header',
    'directives/footer',
    'directives/nav'
], function (angularAMD) {
    'use strict';
    var app = angular.module("webapp", ['ui.router']);
    app.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home',angularAMD.route({
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'homeController',
                controllerUrl: 'controllers/home'}))
        .state('about',angularAMD.route({
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'aboutController',
                controllerUrl: 'controllers/about'}))
        ;



        $urlRouterProvider.otherwise("/home");
    });
        angularAMD.bootstrap(app,false,document.getElementById('mainView'));
    return app;
});