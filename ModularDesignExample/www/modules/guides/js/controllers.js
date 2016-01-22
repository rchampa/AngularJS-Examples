/**
 * Created by ricardoinnovati on 22/01/16.
 */
var guides = angular.module('main.guides');
guides.controller('IndexCtrl', function() {
    console.log('Index');
})
.controller('LoginGuideCtrl', function($scope) {

  console.log('feck');
  $scope.checkLogin = function(){
    $scope.message = "Welcome "+$scope.name+"!"
  };

})
.controller('ListCtrl', function() {
  console.log('List');
})
