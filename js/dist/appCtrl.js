'use strict';

{
  'use strict';

  app = angular.module('app');

  app.controller('appCtrl', function ($scope, $location, $anchorScroll) {
    $scope.scrollTo = function (id) {
      $location.hash(id);
      $anchorScroll();
    };
  });
}