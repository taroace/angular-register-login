'use strict';

app.controller('BaseCtrl', [
    '$scope',
    'AuthService',
    '$location',
    function($scope, AuthService, $location) {
      $scope.user = {};
      var token = localStorage.getItem('response');
       console.log("inside base controller",token)
       $scope.logout = function() {
          console.log("logout dele scope");
          AuthService.logoutUser()
          $location.path('/login');
      };
       if(token)
       {
          AuthService.setToken(token);
       }
       else{
        console.log("return null")
        return;
       // $location.path('/login');
       }
       //var isLoggedIn=AuthService.isLoggedIn(token)
        //console.log("a ",isLoggedIn);

      }]);