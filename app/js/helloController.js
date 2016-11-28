/// <reference path="../../typings/index.d.ts" />


angular.module('helloModule', [])
    .controller('helloController', ['$scope', function ($scope) {
        $scope.user = {};
        $scope.user.username = 'buxiaoxia';
    }])