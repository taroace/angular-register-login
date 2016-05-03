'use strict';

  app.controller('RegisterController', [
    '$scope',
    '$state',
    'UserService',
    'AuthService',
    '$location',
    'FlashService',
    function($scope, $state, UserService, AuthService, $location, FlashService) {
      $scope.user = {};
      var seller_token = localStorage.getItem('token');
      $scope.token= seller_token,
      console.log("inside user regiss");
      $scope.register = function() {
        $scope.dataLoading = true;
        UserService.Create($scope.user)
          .then(function (response) {
            console.log("response",response.message);
            if (response.success) {
              AuthService.setToken(response.token);
              FlashService.Success('Great, Please fill the Detail below for exciting feature', true);
              $location.path('/registration-detail');
            } else {
               console.log("response error",response);
              FlashService.Error(response.message);
              $scope.dataLoading = false;
            }
          });
      };
      $scope.registerDetail = function() {
        $scope.dataLoading = true;
        UserService.RegisterDetail($scope.user)
          .then(function (response) {
            console.log("response",response.message);
            if (response.success) {
              localStorage.removeItem('token');
              FlashService.Success('Great, Please Login below for exciting feature', true);
              $location.path('/login');
            } else {
               console.log("response error",response);
              FlashService.Error(response.message);
              $scope.dataLoading = false;
            }
          });
      };
    }]);