'use strict';
/**
 * @ngdoc object
 * @name core.Controllers.HomeWelcomeCtrl
 * @description Home Welcome controller
 * @requires ng.$scope
 */
angular.module('core').controller('HomeWelcomeCtrl', ['$scope',
    function($scope) {
        $scope.leftTitle = 'Добре дошли';
        $scope.leftDesc = 'в Света на татуировките!';
        $scope.leftContent = 'Нашият сайт има за цел да обедини на едно място всички татуисти в България, всички татуировки и всички събития, свързани с живоата на татуиста. Безкрайото търсене в интернет вече е история. Тук ще намерите не само идеи за татуировка, но и татуист, който би я направил за вас.';
        $scope.rightTitle = 'За татуисти';
        $scope.rightDesc = 'Намерете нови клиенти';
        $scope.rightContent = 'Предлагаме ви един нестандартен начин да привлечете нови клиенти, при това напълно безплатно. Достатъчно е само да се регистрирате в нашия сайт и да попълните коректно профила си.';
        $scope.rightImage = 'img/home-slider/3.jpg';
    }
]);