var vrControllers = angular.module('vrControllers', []);

vrControllers.controller('MainMenuCtrl', ['$scope', '$http', '$routeParams',
  function ($scope, $http, $routeParams) {

  var x = document.getElementsByClassName("vr-image-demo");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].addEventListener('click', function () {
          window.location.href = '#/image?url=' + this.getAttribute("src");
      });
  }

}]);

vrControllers.controller('ImageCtrl', ['$scope', '$http', '$routeParams',
  function ($scope, $http, $routeParams) {

  $scope.image = $routeParams.url;
}]);

vrControllers.controller('VideoCtrl', ['$scope', '$http', '$routeParams',
  function ($scope, $http, $routeParams) {
  $scope.video = [
    'https://farm4.staticflickr.com/3917/14646855999_d59e5ce9c5_c.jpg'
  ];
}]);
