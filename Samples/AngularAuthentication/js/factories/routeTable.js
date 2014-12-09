define([
    'angularAMD'
], function (angularAMD) {
    'use strict';
    var routes = {}
    routes.authenticated ={};
    routes.unauthenticated={};

    routes.unauthenticated.home= angularAMD.route({
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'homeController',
        controllerUrl: 'controllers/home'

    })
    routes.authenticated.about= angularAMD.route({
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'aboutController',
        controllerUrl: 'controllers/about'

    });
    routes.unauthenticated.home.authenticate=false;
    routes.authenticated.about.authenticate=true;


    return routes;

});