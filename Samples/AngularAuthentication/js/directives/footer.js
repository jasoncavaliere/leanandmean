define(['angularAMD'], function (angularAMD) {
    angularAMD.directive('ngFooter', function () {
        return {
            templateUrl: 'views/directives/footer.html'
            ,scope:true
        };
    });
});

