'use strict';
/**
 * @ngdoc object
 * @name core.config
 * @requires ng.$stateProvider
 * @requires ng.$urlRouterProvider
 * @description Defines the routes and other config within the core module
 */
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        /**
         * @ngdoc event
         * @name core.config.route
         * @eventOf core.config
         * @description
         *
         * Define routes and the associated paths
         *
         * - When the path is `'/'`, route to home
         * */
        $stateProvider.state('app', {
            url: '/',
            templateUrl: 'modules/core/views/home.html',
            controller: 'HomeController'
        })
        .state('artists', {
            url: '/artists',
            templateUrl: 'modules/core/views/artists.html',
            controller: 'ArtistsPageCtrl'
        })
        .state('gallery', {
            url: '/gallery',
            templateUrl: 'modules/core/views/gallery.html',
            controller: 'GalleryPageCtrl'
        })
        .state('events', {
            url: '/events',
            templateUrl: 'modules/core/views/events.html',
            controller: 'EventsPageCtrl'
        })
        .state('news', {
            url: '/news',
            templateUrl: 'modules/core/views/news.html',
            controller: 'NewsPageCtrl'
        });
    }
]);
// Add 'active' state for menu
angular.module('core').run(['$rootScope', '$location', function($rootScope, $location) {
    var path = function() {
        return $location.path();
    };
    $rootScope.$watch(path, function(newVal, oldVal) {
        $rootScope.activetab = newVal;
    });
}]);