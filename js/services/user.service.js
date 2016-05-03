'use strict';

app.factory('UserService', [
    '$http',
    function($http) {
      var service = {};
      service.Create = Create;
      service.RegisterDetail = RegisterDetail;
      return service;
      function Create(user) {
        return $http.post('http://your url', user)
          .then(handleSuccess, handleError);
      }
      function RegisterDetail(user) {
        return $http.post('http://your url', user)
          .then(handleSuccess, handleError);
      }

      function handleSuccess(res) {
        console.log("inside handle success res.data res.status",res.data);
        return res.data;
      }

      function handleError(error) {
        return error.data
      }
    }]);
