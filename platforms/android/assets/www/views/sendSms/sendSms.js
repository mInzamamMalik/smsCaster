angular.module("starter")
  .controller("sendSmsController",function($scope,$cordovaSMS){

$scope.send = function(){

  $scope.data = {};

  $cordovaSms
    .send($scope.data.mobileNumber, $scope.data.text , options)
    .then(function() {
      // Success! SMS was sent
    }, function(error) {
      // An error occurred
    });
}

});
