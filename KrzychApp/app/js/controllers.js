'use strict';

/* Controllers */

var krzychControllers = angular.module('KrzychControllers', []);

krzychControllers.controller('UserListCtrl', ['$scope','$http','$location','$rootScope', function($scope, $http, $location, $rootScope) {
	
	$scope.users = [];
	
	function getUsersFromServer() {
		$http.get('data/users.json').success(function(data) {
			$scope.users = data;
		});
	}
	
	$http.get('data/users.json').success(function(data) {
		$scope.users = data;
	});
	
    $scope.KrzychEditClicked = function(user) {
        
		$rootScope.editedUser = user;
		console.log($location.path());
		$location.path("/editView");
		//$location.path("#/editView");
		//location.href="#/editView";
		
    };
	
	$scope.KrzychDeleteClicked = function(id) {
		
		var index = null;
		for(var i=0,len=$scope.users.length; i<len; i++) {
			if ($scope.users[i].id == id) {
				index=i;
			}
		}
		var removedUser = $scope.users.splice(index, 1);
		
		
		$http.post("/users.impaqgroup.com/remove/user.id", removedUser).
		  success(function(data, status, headers, config) {
			console.log('ok users removed you can now refresh the users');
			getUsersFromServer();
		  }).
		  error(function(data, status, headers, config) {
			console.log('Yes I ');
			//getUsersFromServer();
		  });
  
  
    };	
  
}]);

krzychControllers.controller('UserEditCtrl', ['$scope','$http','$location','$rootScope', function($scope, $http, $location, $rootScope) {
	
	console.log('edited user is: ', $rootScope.editedUser);
	$scope.user = $rootScope.editedUser;
	
	$scope.update=function(user) {
		$http.post("/users.impaqgroup.com/edit/user.id", user).
		  success(function(data, status, headers, config) {
			
		  }).
		  error(function(data, status, headers, config) {
			console.log('Yes I edited user');
			//getUsersFromServer();
		  });
	}
	//$scope.users = [];
	
}]);




