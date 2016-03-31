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
          if (this.getAttribute("video") && this.getAttribute("video").length) {
             window.location.assign('#/video?url=' + this.getAttribute("video-url"));
          } else {
             window.location.assign('#/image?url=' + this.getAttribute("src"));
          }
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

  // Ensure back functionality works as expected across devices
  $scope.$on('$routeChangeStart', function (scope, next, current) {
        if (next.$$route.controller == "ImageCtrl") {
            window.location.assign('#/home');
        }
  });

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

  // Ensure back functionality works as expected across devices
  $scope.$on('$routeChangeStart', function (scope, next, current) {
        if (next.$$route.controller == "VideoCtrl") {
            window.location.assign('#/home');
        }
  });

  $scope.video = $routeParams.url;
}]);
