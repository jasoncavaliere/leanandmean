define(['app','factories/pageFramework'], function (app) {
    'use strict';
    app.register.controller('aboutController',['$scope', '$state','pageFramework', function($scope, $state,pageFramework) {
        pageFramework.setPageFramework($scope);
        $scope.Message = "About Us page"
    }]);
});