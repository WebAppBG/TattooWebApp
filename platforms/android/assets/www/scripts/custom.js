'use strict';
var ApplicationConfiguration = (function() {
    var applicationModuleName = 'angularjsapp';
    var applicationModuleVendorDependencies = [
        'ngResource',
        
        'ngCookies', 
        
        'ngAnimate', 
        
        'ngTouch', 
        
        'ngSanitize', 
        'ui.router',
        'ui.utils'
    ];
    var registerModule = function(moduleName) {
        angular
            .module(moduleName, []);
        angular
            .module(applicationModuleName)
            .requires
            .push(moduleName);
    };

    return {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        registerModule: registerModule
    };
})();

'use strict';

angular
    .module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

angular
    .module(ApplicationConfiguration.applicationModuleName)
    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]);
angular
    .element(document)
    .ready(function() {
        if (window.location.hash === '#_=_') {
            window.location.hash = '#!';
        }
        angular
            .bootstrap(document,
                [ApplicationConfiguration.applicationModuleName]);
    });

'use strict';

ApplicationConfiguration.registerModule('core');

'use strict';
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
                $stateProvider.state('app', {
            url: '/',
            templateUrl: 'modules/core/views/home.html',
            controller: 'HomeController'
        })
        .state('app.artists', {
            url: '/artists',
            templateUrl: 'modules/core/views/artists.html',
        })
        .state('app.gallery', {
            url: '/gallery',
        })
        .state('app.events', {
            url: '/events',
        })
        .state('app.news', {
            url: '/news',
        });
    }
]);
angular.module('core').run(['$rootScope', '$location', function($rootScope, $location) {
    var path = function() {
        return $location.path();
    };
    $rootScope.$watch(path, function(newVal, oldVal) {
        $rootScope.activetab = newVal;
    });
}]);
'use strict';
angular.module('core').controller('HomeController', ['$scope',
    function($scope) {
        $scope.title = 'Home';
    }
]);
'use strict';
/**
 * @ngdoc object
 * @name core.Controllers.HomeGalleryCtrl
 * @description Gallery home controller
 * @requires ng.$scope
 */
angular.module('core').controller('HomeGalleryCtrl', ['$scope',
    function($scope) {
    	$scope.sectionTitle = 'Галерия';
    	$scope.sectionDesc = 'Нови татуировки';
    	$scope.sectionContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos iusto ipsum eveniet quam, quod adipisci vitae, modi obcaecati, reiciendis explicabo dolores dicta aliquam officia expedita. Sequi ipsum alias dignissimos perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos iusto ipsum eveniet quam, quod adipisci vitae, modi obcaecati, reiciendis explicabo dolores dicta aliquam officia expedita. Sequi ipsum alias dignissimos perspiciatis.';
    	$scope.tattooGalleries = [{
    		id: '1',
    		name: 'Lorem Ipsum',
    		cover: 'img/gallery/1.jpg'

    	},{
    		id: '2',
    		name: 'Lorem Ipsum',
    		cover: 'img/gallery/2.jpg'

    	},{
    		id: '3',
    		name: 'Lorem Ipsum',
    		cover: 'img/gallery/3.jpg'

    	},{
    		id: '4',
    		name: 'Lorem Ipsum',
    		cover: 'img/gallery/4.jpg'

    	},{
    		id: '5',
    		name: 'Lorem Ipsum',
    		cover: 'img/gallery/5.jpg'

    	},{
    		id: '6',
    		name: 'Lorem Ipsum',
    		cover: 'img/gallery/6.jpg'

    	},{
    		id: '7',
    		name: 'Lorem Ipsum',
    		cover: 'img/gallery/7.jpg'

    	},{
    		id: '8',
    		name: 'Lorem Ipsum',
    		cover: 'img/gallery/8.jpg'

    	}];
    }
]);
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
'use strict';
/**
 * @ngdoc object
 * @name core.Controllers.ScrollTopCtrl
 * @description Scroll top controller
 * @requires ng.$scope
 */
angular.module('core').controller('ScrollTopCtrl', ['$scope',
    function($scope) {
        $scope.title = 'Home';
    }
]);