define(['angularAMD'], function (angularAMD) {
    'use strict';
    angularAMD.service('loginService', ['$http',function ($http) {

        var service = {
            token : '',
            loggedInUserName:'',
            isLoggedIn:function(){
                return service.token!='';
            },
            isAuthorized : function(){
                if(!service.isLoggedIn()){
                    return false;
                }
                //todo - add oauth type code here...
                return true;
            }
            ,doLogin:function(username,password,oncomplete){
                service.token= 'test token';
                service.loginWatcher=true;
                service.loggedInUserName=username;
                if(oncomplete){
                    oncomplete();
                }
            }
            ,doLogout:function(oncomplete){
                service.token= '';
                service.loggedInUserName='';
                if(oncomplete){
                    oncomplete();
                }
            }
        }
        return service ;
    }]);
});



