'use strict';

{
  'use strict';

  app = angular.module('app');

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $stateProvider.state('main', {
      url: '/',
      templateUrl: './views/main.html'
    }).state('forum', {
      url: '/forum',
      templateUrl: './views/forum.html'
    }).state('portfolio', {
      url: '/portfolio',
      templateUrl: './views/portfolio.html'
    });

    $urlRouterProvider.otherwise('/');
  }]);
}