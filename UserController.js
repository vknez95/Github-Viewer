(function() {

  var app = angular.module("githubViewer");

  var UserController = function($scope, github, $routeParams) {

    var onUserComplete = function(data) {
      $scope.user = data;
      $scope.error = null;
      github.getRepos($scope.user).then(onReposComplete, onReposError);
    };

    var onUserError = function(reason) {
      $scope.error = "Could not fetch the user";
      $scope.user = null;
    };

    var onReposComplete = function(data) {
      $scope.repos = data;
      $scope.error = null;
    };

    var onReposError = function(reason) {
      $scope.error = "Could not fetch the repos";
    };

    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    
    github.getUser($scope.username).then(onUserComplete, onUserError);

  };

  app.controller("UserController", UserController);

}());