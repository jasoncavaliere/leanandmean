require.config({

    baseUrl: "js",

    // alias libraries paths.  Must set 'angular'
    paths: {
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular.min',
        'angularAMD': '//cdn.rawgit.com/marcoslin/bower-angularAMD/v0.0.2/angularAMD.min'
    },
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angular-ui-router': ['angular']
    },
    // kick start application
    deps: ['app']
});
