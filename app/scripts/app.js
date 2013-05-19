'use strict';

angular.module('TimeThingiesApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/me', {
        templateUrl: 'views/me.html',
        controller: 'MeCtrl'
      })
      .when('/friends', {
        templateUrl: 'views/friends.html',
        controller: 'FriendsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
