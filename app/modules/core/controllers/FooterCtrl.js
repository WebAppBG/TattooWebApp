'use strict';
/**
 * @ngdoc object
 * @name core.Controllers.FooterCtrl
 * @description Footer controller
 * @requires ng.$scope
 */
angular.module('core').controller('FooterCtrl', ['$scope',
    function($scope) {
        $scope.footerTattooTypes = [{
            title: 'Видове татуировки',
            link: '/#'
        }, {
            title: 'Японски',
            link: '/#'
        }, {
            title: 'Реалистични',
            link: '/#'
        }, {
            title: 'Трайбъл',
            link: '/#'
        }, {
            title: 'Черно-бели',
            link: '/#'
        }, {
            title: 'Old school',
            link: '/#'
        }, {
            title: 'New school',
            link: '/#'
        }, {
            title: 'Цветни',
            link: '/#'
        }, {
            title: 'Портрети',
            link: '/#'
        }];

        $scope.footerTattooArtists = [{
            title: 'Иван Петров',
            link: '/#'
        }, {
            title: 'Валентин Иванов',
            link: '/#'
        }, {
            title: 'Цветан Иванов',
            link: '/#'
        }, {
            title: 'Гинка Койчева',
            link: '/#'
        }, {
            title: 'Пешо Гошов',
            link: '/#'
        }];

        $scope.footerLatestNews = [{
            title: 'Очаквайте на Tattoo Expo 2016',
            link: '/#'
        }, {
            title: 'Важен ли е цветът на татуировката',
            link: '/#'
        }, {
            title: 'Какво трябва да знаете, преди да се татуирате',
            link: '/#'
        }];
    }
]);