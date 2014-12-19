define(['angularAMD'], function (angularAMD) {
    angularAMD.directive('ngNav',['loginService', function (loginService) {
        this.doLogin=function() {
            loginService.doLogin();
        };

        return {
        templateUrl: 'views/directives/nav.html'
            ,scope:true
        };
    }]);
});

