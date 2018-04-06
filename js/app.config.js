(function () {
  'use strict'
  angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
      function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.hashPrefix('')
        $locationProvider.html5Mode(true)

        $stateProvider
          .state('main', {
            url: '/',
            views: {
              '': {
                templateUrl: './views/main.html'
              },
              'footer': {
                template: 'Mano rankų darbas © 2018 - Klaipėda'
              }
            }
          }).state('main-en', {
            url: '/en',
            views: {
              '': {
                templateUrl: './views/en.main.html'
              },
              'footer': {
                template: 'Handmade by me © 2018 - Klaipėda'
              }
            }
          }).state('forum', {
            url: '/forum',
            views: {
              '': {
                templateUrl: './views/forum.html'
              },
              'footer': {
                template: 'Mano rankų darbas © 2018 - Klaipėda'
              }
            }
          }).state('forum-en', {
            url: '/forum-en',
            views: {
              '': {
                templateUrl: './views/en.forum.html'
              },
              'footer': {
                template: 'Handmade by me © 2018 - Klaipėda'
              }
            }
          }).state('portfolio', {
            url: '/portfolio',
            views: {
              '': {
                templateUrl: './views/portfolio.html'
              },
              'footer': {
                template: 'Mano rankų darbas © 2018 - Klaipėda'
              }
            }
          }).state('portfolio-en', {
            url: '/portfolio-en',
            views: {
              '': {
                templateUrl: './views/en.portfolio.html'
              },
              'footer': {
                template: 'Handmade by me © 2018 - Klaipėda'
              }
            }
          }).state('acrostia', {
            url: '/acrostia',
            views: {
              '': {
                templateUrl: './views/acrostia.html'
              },
              'footer': {
                template: 'Mano rankų darbas © 2018 - Klaipėda'
              }
            }
          }).state('acrostia-en', {
            url: '/acrostia-en',
            views: {
              '': {
                templateUrl: './views/en.acrostia.html'
              },
              'footer': {
                template: 'Handmade by me © 2018 - Klaipėda'
              }
            }
          }).state('ie9', {
            url: '/ie9',
            views: {
              '': {
                templateUrl: './views/ie9.html'
              },
              'footer': {
                template: 'Mano rankų darbas © 2018 - Klaipėda'
              }
            }
          }).state('ie9-en', {
            url: '/ie9-en',
            views: {
              '': {
                templateUrl: './views/en.ie9.html'
              },
              'footer': {
                template: 'Handmade by me © 2018 - Klaipėda'
              }
            }
          })

        $urlRouterProvider.otherwise('/')
      }])
})()
