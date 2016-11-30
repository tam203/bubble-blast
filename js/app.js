var VRApp = angular.module('vrApp', [
  'ng',
  'ngRoute',
  'vrControllers'
]);

VRApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/main.html',
        controller: 'MainMenuCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
}]);
