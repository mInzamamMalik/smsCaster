/**
 * Created by malikasinger on 11/17/2015.
 */
angular.module("starter")

  .service("dataService", function ($cordovaToast) {

    this.toast = function (text, dur, pos) {
      $cordovaToast
        .show(text, dur, pos)
        .then(function (success) {
          // success
        }, function (error) {
          // error
        });
    }


  });
