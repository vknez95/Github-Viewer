(function() {

  var app = angular.module("githubViewer");

  var RepoController = function($scope, github, $routeParams) {
    
    var onRepoDetailsComplete = function(data) {
      $scope.repodetails = data;
      github.getContributors($scope.repodetails).then(onContributorsComplete, onContributorsError);
    };

    var onRepoDetailsError = function(reason) {
    };
    
    var onContributorsComplete = function(data) {
      $scope.contributors = data;
    };

    var onContributorsError = function(reason) {
    };

    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;

    github.getRepoDetails($scope.username, $scope.reponame).then(onRepoDetailsComplete, onRepoDetailsError);

  };

  app.controller("RepoController", RepoController);

}());