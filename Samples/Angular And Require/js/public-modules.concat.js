define(['app'], function (app) {
    'use strict';

    app.register.controller('PublicCtrl', function($scope, $state) {
        //pass
    });

    app.register.controller('LoginCtrl', function($scope, $state) {
        $scope.stateName = $state.current.name;

        $scope.Login = function()
        {
            $state.go("private.pageOne");
        };
    });

});
