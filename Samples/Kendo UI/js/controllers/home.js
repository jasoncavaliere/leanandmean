define(['app'
    ,'factories/pageFramework'
], function (app) {
    'use strict';
    app.register.controller('homeController',['$scope', '$state','pageFramework', function($scope, $state,pageFramework) {

        pageFramework.setPageFramework($scope);

        $scope.greetMe="AMD world!";
        $scope.users=[
            {firstName: 'jason',lastName: 'cavaliere'},
            {firstName: 'jason',lastName: 'cavaliere'},
            {firstName: 'jason',lastName: 'cavaliere'}
        ];
    }]);
});