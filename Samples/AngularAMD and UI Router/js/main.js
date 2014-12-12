require.config({
    baseUrl: "js",
    paths: {
        'angular': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.3/angular.min',
        'angularAMD': '//cdn.jsdelivr.net/angular.amd/0.2.1/angularAMD.min',
        'angular-ui-router': '//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.11/angular-ui-router'
    },
    shim: {
        "angular": {exports: "angular"},
        'angular-ui-router': ['angular']
    },
    deps: ['app']
});
