define(['angularAMD'], function (angularAMD) {
    angularAMD.directive('ngHeader', function () {
        return {
            templateUrl: 'views/directives/header.html'
            ,scope:true
        };
    });
});


