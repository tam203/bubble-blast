var VRApp = angular.module('vrApp', [
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
      when('/image', {
        templateUrl: 'partials/360image.html',
        controller: 'ImageCtrl'
      }).
      when('/video', {
        templateUrl: 'partials/360video.html',
        controller: 'VideoCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
}]);
