define(['angular'], function (angular)
{
    var app = angular.module("globalModule", []);
    app.service('pageFramework',function(){
        var globalData = {
            headerModel: {
                title: "AMD Components of an angular app.",
                stylesheets: [
                    {href: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css', type: 'text/css'}
                ]
            },
            topNav: {
                links: [
                    {text: 'Home', href: '#'},
                    {text: 'Link 1', href: '#'},
                    {text: 'Link 2', href: '#'},
                    {text: 'link 3', href: '#'},
                ]
            },
            footer: {
                Message: "Thanks for visiting!",
                links: [
                    {text: 'Home', href: '#'},
                    {text: 'Link 1', href: '#'},
                    {text: 'Link 2', href: '#'},
                    {text: 'link 3', href: '#'},
                ]
            }

        }
        var exports = {
            setPageFramework :function(controllerScope){
                controllerScope.header = globalData.headerModel;
                controllerScope.topNav=globalData.topNav;
                controllerScope.footer=globalData.footer;
            }
        };
        return exports ;
    });
});