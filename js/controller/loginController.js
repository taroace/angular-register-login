'use strict';

app.controller('loginController', [
    '$scope',
    '$state',
    'LoginService',
    'AuthService',
    '$location',
    'FlashService',
    function($scope, $state, LoginService, AuthService, $location, FlashService) {
      $scope.login = function() {
        $scope.dataLoading = true;
        LoginService.Login($scope.username,$scope.password)
        .then(function (response) {
          console.log("response is ",response)
            if (response.success) {
              console.log("login controller if condition",response.token);
              FlashService.Success('Login successful', true);
              AuthService.setAuth(response.auth_key);
              //localStorage.response = JSON.stringify(response.token);
              AuthService.isLoggedIn(response.auth_key)
              $location.path('/home');
            } else {
              console.log("login controller else condition",response.message);
              FlashService.Error(response.message);
              $scope.dataLoading = false;
            }
          });
      };
    }]);
