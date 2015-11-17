angular.module("starter")
  .controller("sendSmsController",function($scope/*,$cordovaSMS*/){

    $scope.data = {};

    $scope.send = function(){

      for(var i=0; i < $scope.data.count; i++){

        console.log($scope.data.mobileNumber + i);
      }
    /*$cordovaSms
    .send($scope.data.mobileNumber, $scope.data.text , options)
    .then(function() {
      // Success! SMS was sent
    }, function(error) {
      // An error occurred
    });*/
}

});
