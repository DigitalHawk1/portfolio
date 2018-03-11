{
  'use strict'

  app = angular.module('app')

  app.controller('appCtrl', ($scope, $location, $anchorScroll) => {
    $scope.scrollTo = (id) => {
      $location.hash(id)
      $anchorScroll()
    }
  })
}