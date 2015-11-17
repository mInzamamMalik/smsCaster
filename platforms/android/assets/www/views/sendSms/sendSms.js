angular.module("starter")
  .controller("sendSmsController",function($scope,$cordovaSms){

    $scope.data = {};
    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        //intent: 'INTENT'  // send SMS with the native android SMS messaging
        intent: '' // send SMS without open any other app
      }
    };

    $scope.send = function(){
      $scope.data.count--;


    $cordovaSms
    .send($scope.data.mobileNumber, $scope.data.text , options)
    .then(function() {
      console.log("// Success! SMS was sent");
        $scope.data.mobileNumber++;
        if($scope.data.count){

          $scope.send();

        }
    }, function(error) {
        console.log("// An error occurred");
      // An error occurred
        $scope.data.mobileNumber++;
        if($scope.data.count){

          $scope.send();
          
        }
    });
}

});
