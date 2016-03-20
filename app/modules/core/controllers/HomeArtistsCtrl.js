'use strict';
/**
 * @ngdoc object
 * @name core.Controllers.HomeArtistsCtrl
 * @description Home Artists controller
 * @requires ng.$scope
 */
angular.module('core').controller('HomeArtistsCtrl', ['$scope',
    function($scope) {
        $scope.sectionTitle = 'Татуисти';
        $scope.artists = [{
            name: 'Цветан Иванов',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg',
            location: 'София',
            bio: 'Опитвам се да избягам от копирането на чужди татуировки и предпочитам да правя мои дизайни. Имам собствено студио в град Велико Търново от 2010 година.',
        }, {
            name: 'Иван Иванов',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
            location: 'Варна',
            bio: 'Опитвам се да избягам от копирането на чужди татуировки и предпочитам да правя мои дизайни. Имам собствено студио в град Велико Търново от 2010 година.',
        }, {
            name: 'Петър Страхилов',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg',
            location: 'Бургас',
            bio: 'Опитвам се да избягам от копирането на чужди татуировки и предпочитам да правя мои дизайни. Имам собствено студио в град Велико Търново от 2010 година.',
        }, {
            name: 'Владислав Великов',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/tonystubblebine/128.jpg',
            location: 'Пловдив',
            bio: 'Опитвам се да избягам от копирането на чужди татуировки и предпочитам да правя мои дизайни. Имам собствено студио в град Велико Търново от 2010 година.',
        }, {
            name: 'Цветан Иванов',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg',
            location: 'София',
            bio: 'Опитвам се да избягам от копирането на чужди татуировки и предпочитам да правя мои дизайни. Имам собствено студио в град Велико Търново от 2010 година.',
        }, {
            name: 'Стефка Татуистката',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
            location: 'Стара Загора',
            bio: 'Опитвам се да избягам от копирането на чужди татуировки и предпочитам да правя мои дизайни. Имам собствено студио в град Велико Търново от 2010 година.',
        }, {
            name: 'Марин Стоянов',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/mattsince87/128.jpg',
            location: 'София',
            bio: 'Опитвам се да избягам от копирането на чужди татуировки и предпочитам да правя мои дизайни. Имам собствено студио в град Велико Търново от 2010 година.',
        }];
    }
]);