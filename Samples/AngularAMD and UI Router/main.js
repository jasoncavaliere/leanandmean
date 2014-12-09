require.config({

    baseUrl: "js",

    // alias libraries paths.  Must set 'angular'
    paths: {
        'angular': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.3/angular.min',
        'angularAMD': '//cdn.jsdelivr.net/angular.amd/0.2.1/angularAMD.min',
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angular-ui-router': ['angular']
    },

    // kick start application
    deps: ['app']
});
