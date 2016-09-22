'use strict';
angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'views/partials/partials-home.html'

			})
			.state('about', {
				url: '/about',
				templateUrl: 'views/partials/partials-about.html'

			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'views/partials/partials-contact.html'

			})
            .state('work', {
                url: '/work',
                templateUrl: 'views/partials/partials-work.html'
            });
	}])