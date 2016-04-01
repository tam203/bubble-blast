var vrControllers = angular.module('vrControllers', []);




vrControllers.controller('MainMenuCtrl', ['$scope', '$http', '$routeParams',
  function ($scope, $http, $routeParams) {

  $scope.upperIndex = [350, 330, 310, 290, 270, 250, 230, 210, 190, 170, 150, 130, 110, 90, 70, 50, 30, 10, 350, 330, 310, 290, 270, 250, 170, 150, 130, 110, 90, 70, 50, 30, 10];
  $scope.lowerIndex = [0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9,0.9,0.9,0.9,0.9,0.9, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3,1.3,1.3,1.3,1.3,1.3];

  $scope.images = [];

  $http.get('images.json').success(function(response) {
      $scope.images = response.images;
  });

  $scope.getThumbnail = function(url)
  {
     if (url)
     {
        var index = url.lastIndexOf("/") + 1;
        var filename = url.substr(index);
        return 'flickr/thumbnails/flickr/' + filename;
     }
     return "";
  }

  var scene = document.querySelector('a-scene');
  if (scene) {
    if (scene.hasLoaded) {
      scene.enterVR();
    } else {
      scene.addEventListener('loaded', scene.enterVR);
    }
  }

  var x = document.getElementsByClassName("vr-image");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].addEventListener('click', function () {
                   window.location.assign('#/image?url=' + x[i].getAttribute("url"));
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
