define(['angularAMD'], function (angularAMD) {
    angularAMD.directive('ngNav',['loginService', function () {
        return {
        templateUrl: 'views/directives/nav.html'
            ,scope:true
            ,replace:true
        };
    }]);
});

