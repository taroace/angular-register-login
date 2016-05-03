'use strict';
var app=angular.module('web-app', ['ui.router'])
/**
 * Configure the Routes
 */

.config(function ($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider
      .when('/', '/login')
      .otherwise('/login');
      
      $stateProvider
        
        .state('base', {
          url: '/',
          templateUrl: 'partials/base.html',
          controller: 'BaseCtrl'
        })
    
        .state('base.registration', {
            url: 'registration',
            views: {
              'main-view': {
                templateUrl: 'partials/registration.html',
                controller: 'RegisterController'
              }
            }
        })
        .state('base.registration-step-2', {
            url: 'registration-detail',
            views: {
              'main-view': {
                templateUrl: 'partials/registration-step-two.html',
                controller: 'RegisterController'
              }
            }
        })
        .state('base.home', {
          url: 'home',
          views: {
            'main-view': {
              templateUrl: 'partials/home.html',
               // controller: 'MainController'
            }
          }
        })
        .state('base.login', {
            url: 'login',
            views: {
              'main-view': {
                templateUrl: 'partials/login.html',
                controller: 'loginController',
              }
            }
        })
});
app.run(['$rootScope', '$state', '$location', 'AuthService', function ($rootScope, $state, $location, AuthService) {

  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
    var restrictedPage = $.inArray(toState.url, ['login', 'registration', 'registration-detail']) === -1;
    var token = localStorage.getItem('token');
    var auth_key = localStorage.getItem('auth_key');
    var loggedIn= AuthService.isLoggedIn(auth_key);
    if (restrictedPage && !loggedIn) {
      $location.path('/login');
    }
    else if(loggedIn && (toState.url==="login" || toState.url==="registration" || toState.url==="registration-detail")){
      $location.path('/home');
    }
  });

}]);
