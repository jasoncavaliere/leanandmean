require.config({

    //setting a root path in your app for all scripts
    baseUrl: "js",
    paths: {
        //set a keyword for angular ( and all 3rd party libraries
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular.min',
    },
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        //Tell requirejs to pipe in angular's return variable as 'angular'
        "angular": {exports: "angular"}
    },
    // kick start application
    deps: ['app']
});
