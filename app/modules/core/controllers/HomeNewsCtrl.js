'use strict';
/**
 * @ngdoc object
 * @name core.Controllers.HomeNewsCtrl
 * @description News section controller
 * @requires ng.$scope
 */
angular.module('core').controller('HomeNewsCtrl', ['$scope',
    function($scope) {
        $scope.sectionTitle = 'Блог';
        $scope.sectionDesc = 'Новини и съвети';
        $scope.latestNews = [{
        	title: 'Очаквайте на Tattoo Expo 2016',
        	excerpt: 'When Jazz starts to chase cars, the whole world stands still.',
        	featuredImage: 'img/news/1.jpg'
        },{
        	title: 'Важен ли е цветът на татуировката',
        	excerpt: 'When Jazz starts to chase cars, the whole world stands still.',
        	featuredImage: 'img/news/2.jpg'
        },{
        	title: 'Какво трябва да знаете преди да се татуирате',
        	excerpt: 'Вижте нашите съвети.',
        	featuredImage: 'img/news/3.jpg'
        }];
    }
]);