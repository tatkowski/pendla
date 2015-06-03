(function () {
angular.module('pendla', [
  'ngRoute',
  'pendla.trip'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/', {
      controller: 'TripCtrl as vm',
      templateUrl: '/pendla/trip/trip.html'
    });
});
})();