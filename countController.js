var app = angular.module('myModule');
app.controller('countControllers', function ($scope, countServices,teamnumberService){

  $scope.name = function() {
  	$scope.newname = countServices.fizBuzz($scope.tmName);
    $scope.teamnumber = teamnumberService.teamnumberresult($scope.tmName);
  }
});
