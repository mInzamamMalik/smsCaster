angular.module("starter")
  .controller("schoolSmsController",function($scope,$cordovaSms){

    $scope.getxsldata = function ( ) {
      alasql('SELECT * FROM XLS("sms.xls",{headers:true})',[],function(data){
        $scope.rec=data;
        $scope.$apply();
      });
    };

    $scope.data = {};

    $scope.dosend = function(){
      console.log($scope.rec);
      for(var i=0; i < $scope.rec.length; i++ ){
        $scope.send($scope.rec[i].contactno,$scope.data.text);
      }

    };



    $scope.send = function(num,text){
      var options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
          //intent: 'INTENT'  // send SMS with the native android SMS messaging
          intent: '' // send SMS without open any other app
        }
      };
      $cordovaSms
        .send(num, text, options)
    };





});
