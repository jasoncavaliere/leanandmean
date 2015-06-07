define(['angularAMD'], function (angularAMD) {
    angularAMD.directive('ngNav',['loginService','$state', function (loginService,$state) {

        var navDirective ={
            templateUrl: 'views/directives/nav.html'
            ,scope:true
            ,link:function(scope,elem,attr){
                scope.isLoggedIn = loginService.isLoggedIn();
                scope.loggedInUserName = loginService.loggedInUserName;
                scope.doNavLogin=function(username,password){
                    loginService.doLogin(username,password,scope.doNavUpdate);
                }
                scope.doNavLogout=function(username,password){
                    loginService.doLogout(scope.doNavUpdate);
                    scope.username = '';
                    scope.password= '';
                    $state.go('home');
                }
                scope.doNavUpdate=function(){
                    scope.isLoggedIn = loginService.isLoggedIn();
                    scope.loggedInUserName = loginService.loggedInUserName;
                }
            }
        };
        return navDirective;
    }]);
});

