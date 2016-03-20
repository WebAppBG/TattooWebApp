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