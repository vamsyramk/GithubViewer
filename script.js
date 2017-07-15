// Code goes here
(function(){
    var app = angular.module("githubViewer", []);
    var MainCtrl = function($scope, $http) {
      var usersuccess = function(response) {
        $scope.user = response.data;

      }
      var usererror = function(error) {
        $scope.error = "could not fetch the data";
      }
      $scope.search = function(username){
        $http.get("https://api.github.com/users/"+username).then(usersuccess, usererror);
      }
      
      $scope.message = "Hello Vamsy";
    }
    app.controller("MainCtrl", MainCtrl);
  }());
  