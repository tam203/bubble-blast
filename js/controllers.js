var vrControllers = angular.module('vrControllers', []);

vrControllers.controller('MainMenuCtrl', ['$scope', '$http', '$routeParams',
  function ($scope, $http, $routeParams) {

  var scene = document.querySelector('a-scene');
  if (scene) {
    if (scene.hasLoaded) {
      scene.enterVR();
    } else {
      scene.addEventListener('loaded', scene.enterVR);
    }
  }

  var x = document.getElementsByClassName("vr-image-demo");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].addEventListener('click', function () {
          // Only handling images right now
          window.location.href = '#/image?url=' + this.getAttribute("src");
      });
  }

}]);

vrControllers.controller('ImageCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {

  var scene = document.querySelector('a-scene');
  if (scene) {
    if (scene.hasLoaded) {
      scene.enterVR();
    } else {
      scene.addEventListener('loaded', scene.enterVR);
    }
  }

  $scope.image = $routeParams.url;
}]);

vrControllers.controller('VideoCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {

  var scene = document.querySelector('a-scene');
  if (scene) {
    if (scene.hasLoaded) {
      scene.enterVR();
    } else {
      scene.addEventListener('loaded', scene.enterVR);
    }
  }

  $scope.video = $routeParams.url;
}]);
