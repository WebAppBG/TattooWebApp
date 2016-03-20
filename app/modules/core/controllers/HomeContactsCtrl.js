'use strict';
/**
 * @ngdoc object
 * @name core.Controllers.HomeContactsCtrl
 * @description Home Welcome controller
 * @requires ng.$scope
 */
angular.module('core').controller('HomeContactsCtrl', ['$scope',
    function($scope) {
        $scope.sectionTitle = 'Регистрирайте се сега';
        $scope.sectionDesc = 'Безплатно е!';
        $scope.sectionContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tempore ullam ipsa facilis atque minus, a sit culpa laboriosam repellat natus qui. Debitis explicabo aliquid sit eius, earum, amet perspiciatis.';
        $scope.address = '21-26 Dolomite Street, Plymouth, Devon';
        $scope.workingHours = 'Monday to Friday 11am - 6pm';
        $scope.phone = 'Tel: 0800 000 000';
        $scope.email = 'info@tattoostudio.com';
        $scope.contactsImage = 'img/home-slider/3.jpg';
    }
]);