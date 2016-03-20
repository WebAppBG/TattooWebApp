'use strict';
/**
 * @ngdoc object
 * @name core.Controllers.HomeSimulatorCtrl
 * @description Simulator home controller
 * @requires ng.$scope
 */
angular.module('core').controller('HomeSimulatorCtrl', ['$scope',
    function($scope) {
    	$scope.sectionTitle = 'Симулатор';
    	$scope.sectionDesc = 'Вижте как ще изглежда вашата татуировка';
    	$scope.sectionContent = '/ ОЧАКВАЙТЕ СКОРО /';
    }
]);