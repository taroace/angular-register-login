'use strict';

app.factory('LoginService', [
    '$http',
    function($http) {
    	var service = {};
    	service.Login= Login;
      return service;
    	function Login(user,password) {
        return $http.post('http://your url', { username: user, password: password })
          .then(handleSuccess, handleError('Username or password is wrong'));
      }
       function handleSuccess(res) {
        console.log("inside handle success res.data res.status",res.data);
        return res.data;
      }

      function handleError(error) {
        console.log("inside handle errror");
        return function () {
          return { success: false, message: error };
        };
      }
    	}]);