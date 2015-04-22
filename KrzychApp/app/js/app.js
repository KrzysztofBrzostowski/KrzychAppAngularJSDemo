'use strict';

/* App Module */

//create module. will be used to initialize angular app
var krzychApp = angular.module('KrzychApp', [ 'ngRoute', 'KrzychControllers' ]);

krzychApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/listView', {
        templateUrl: 'partials/table.html',
        controller: 'UserListCtrl'
      }).
	  when('/editView', {
        templateUrl: 'partials/editView.html',
        controller: 'UserEditCtrl'
      }).
	  
      /*when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).*/
      otherwise({
        redirectTo: '/listView'
      });
  }]);
