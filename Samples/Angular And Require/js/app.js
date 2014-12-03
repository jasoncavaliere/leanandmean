define(['angularAMD','angular-ui-router'], function (angularAMD) {
    'use strict';
    var app = angular.module("webapp", ['ui.router']),
        ngAMD = angularAMD(app);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");
;
        $stateProvider
            .state('public',
            ngAMD.route({
                templateUrl: 'views/public.html',
                controller: 'PublicCtrl',
                controllerUrl: 'public-modules.concat'
            })
        )
            .state('public.login',
            ngAMD.route({
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerUrl: 'public-modules.concat'
            })
        )
            .state('private',
            ngAMD.route({
                templateUrl: 'views/private.html',
                controller: 'PrivateCtrl',
                controllerUrl: 'private-modules.concat'
            })
        )
            .state('private.pageOne',
            ngAMD.route({
                url: '/pageOne',
                templateUrl: 'views/pageOne.html',
                controller: 'PageOneCtrl',
                controllerUrl: 'private-modules.concat'
            })
        )
            .state('private.pageTwo',
            ngAMD.route({
                url: '/pageTwo',
                templateUrl: 'views/pageTwo.html',
                controller: 'PageOneCtrl',
                controllerUrl: 'private-modules.concat'
            })
        );
    });

    ngAMD.bootstrap();

    return app;
});