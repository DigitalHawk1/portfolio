{
  'use strict'

  app = angular.module('app')

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    ($stateProvider, $urlRouterProvider, $locationProvider) => {
      $locationProvider.hashPrefix('')

      $stateProvider
        .state('home', {
          url: '/',
          views: {
            'view-navbar': {
              templateUrl: './views/main-navbar-links.html'
            },
            'view-content': {
              templateUrl: './views/main-content.html'
            }
          }
        })

        .state('works-page', {
          url: '/works-page',
          views: {
            'view-navbar': {
              tempalteUrl: './views/works-navbar.html'
            },
            'view-content': {
              templateUrl: './views/works-content.html'

            }
          }
        })

      $urlRouterProvider.otherwise('/')
    }])
}