define(['app'], function (app) {
    'use strict';
    app.register.service('pageFramework',function(){
        var globalData = {
            headerModel: {
                title: "UI Router Authentication",
                stylesheets: [
                    {href: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css', type: 'text/css'}
                ]
            },
            nav: {
                links: [
                    {text: 'Home', sref: 'home'},
                    {text: 'About Us', sref: 'about'}
                ]
            },
            footer: {
            Message: "Thanks for visiting!",
                links: [
                {text: 'Home', sref: 'home'},
                {text: 'About Us', sref: 'about'}
            ]
        }

        }
            var exports = {
                setPageFramework :function(controllerScope){
                    controllerScope.showLogin=!app.loginService.isLoggedIn();
                    controllerScope.username='';
                    controllerScope.password='';
                    controllerScope.loggedInUser=app.loginService.loggedInUser;

                    controllerScope.header = globalData.headerModel;
                    controllerScope.nav=globalData.nav;
                    controllerScope.footer=globalData.footer;
                    controllerScope.doLogin = function(username,password){
                      var result =   app.loginService.doLogin(username,password);
                        controllerScope.showLogin =result.status==0;
                    }
                }
        };
        return exports ;
    });
});
