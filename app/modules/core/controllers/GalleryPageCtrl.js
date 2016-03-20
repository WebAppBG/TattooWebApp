'use strict';
/**
 * @ngdoc object
 * @name core.Controllers.GalleryPageCtrl
 * @description Gallery page controller
 * @requires ng.$scope
 */
 angular.module('core').controller('GalleryPageCtrl', ['$scope',
    function($scope) {
        $scope.content = 'gallery page controllers lorem ipsum';
    }
]);