define(['angularAMD'], function (angularAMD) {
    'use strict';
    angularAMD.service('loginService', ['$http',function ($http) {
        var self=this;
        self.instance = {};
        self.instance.token = '';
        self.instance.isLoggedIn=function(){
            self.instance.token!='';
        };
        self.instance.isAuthorized = function(){
            if(!self.instance.isLoggedIn()){
                return false;
            }
            //todo - add oauth type code here...
            return true;
        };
        self.instance.doLogin=function(username,password){
            alert('logging in as ' + username + '/' + password);
            self.instance.token= 'test token';
        };


        return self.instance;
    }]);



});



