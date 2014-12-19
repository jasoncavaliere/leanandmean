define(['angularAMD'], function (angularAMD) {
    'use strict';
    angularAMD.service('loginService', ['$http',function ($http) {
        var service  = {};
        service.token = '';
        service.loggedInUser = '';
        service.isLoggedIn=function(){
          return this.token!='';
        };
        service.isAuthorized = function(toState){
            var loggedIn =this.isLoggedIn();
            if(!loggedIn){
                return false;
            }
            //todo - add oauth type code here...
            return true;
        };
        service.doLogin=function(username,password){
                this.token= 'test token';
                this.loggedInUser = username;
                return {username:username,status:0};
        };
        return service;
    }]);
});



