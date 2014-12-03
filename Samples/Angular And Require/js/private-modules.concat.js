define(['app'], function (app) {
    'use strict';

    app.register.controller('PrivateCtrl', function($scope, $state) {
            $scope.goto = function(state)
            {
                console.log(state);
                $state.go(state);
        };
    });

    app.register.controller('PageOneCtrl', function($scope, $state) {
        $scope.stateName = $state.current.name;
    });

    app.register.controller('PageTwoCtrl', function($scope, $state) {
        $scope.stateName = $state.current.name;
    });

});