define(['angularAMD'], function (angularAMD) {
    angularAMD.directive('ngNav', function () {
        return {
            templateUrl: 'views/directives/nav.html'
            ,scope:true
        };
    });
});

