'use strict';
/**
 * @ngdoc object
 * @name core.Controllers.NewsPageCtrl
 * @description Artists page controller
 * @requires ng.$scope
 */
 angular.module('core').controller('NewsPageCtrl', ['$scope',
    function($scope) {
        $scope.content = 'news page view';
    }
]);