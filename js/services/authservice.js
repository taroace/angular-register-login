'use strict';

app.factory('AuthService', [
    '$http',
    '$rootScope',
    function($http, $rootScope) {
      console.log("inside auth");
      var service = {};
      service.setToken= setToken;
      service.setAuth= setAuth;
      service.logoutUser= logoutUser;
      service.isLoggedIn= isLoggedIn;
      return service;
      function isLoggedIn(token) {
      if (token) {
        $rootScope.currentUserSignedIn = true;
        $rootScope.currentUserLoggedIn = false;
        return true;
      } else {
        $rootScope.currentUserSignedIn = false;
        $rootScope.currentUserLoggedIn = true;
        return false;
      }
    };
      function setToken(newToken) {
      if (!newToken) {
        localStorage.removeItem('response');
      } else {
        localStorage.setItem('token', newToken);
      }
    }
    function setAuth(newToken) {
      if (!newToken) {
        localStorage.removeItem('response');
      } else {
        localStorage.setItem('auth_key', newToken);
      }
    }
      function logoutUser() {
      // Clear the token
      $rootScope.currentUserSignedIn = true;
      $rootScope.currentUserLoggedIn = false;
      localStorage.removeItem('auth_key');
       //setToken(null);
    };
     }]);