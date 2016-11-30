var vrControllers = angular.module('vrControllers', []);

function guid() {
  // Taken with thanks from Jon Surrell
  // http://stackoverflow.com/a/105074
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}




vrControllers.controller('MainMenuCtrl', ['$scope', '$http', '$routeParams', '$timeout',

  function ($scope, $http, $routeParams,$timeout) {

    $scope.balls = [];

    for (var i = 0; i < 3; i++) {
      addBall();
    }

    $scope.getColour = (ball) => {
      return '#' + toColour(ball.x) + toColour(ball.y) + toColour(ball.z);
    };

    function toColour(pos){
      var hex = Math.floor((pos * pos )% 256).toString(16);
      return (hex.length > 1) ? hex : '0' + hex;
    }

    function addBall() {
      const MAX_POS = 10;
      var ball = {
        x: (Math.random() - 0.5) * 2 * MAX_POS,
        y: (Math.random() - 0.5) * 2 * MAX_POS,
        z: (Math.random() - 0.5) * 2 * MAX_POS,
        speed: getSpeed(),
        id:'ball_'+guid()
      };
      $scope.balls.push(ball);
    }

    function maybeSpawnBall() {
      const SPAWN_FREQ = 0.5;
      if(Math.random() < SPAWN_FREQ){
        addBall();
      }
    }

    function getSpeed(){
      const MAX_SPEED = 0.03;
      return [1, 1, 1].map((i)=>(Math.random() - 0.5) * 2 * MAX_SPEED)
    }

    // Make the balls move somewhat at random
    function changeDir(){
      const CHANGE_FREQ = 0.5;
      for (var i = 0; i < $scope.balls.length; i++) {
        var ball = $scope.balls[i];
        if(Math.random() < CHANGE_FREQ){
          ball.speed = getSpeed()
        }
      }
    }

    // update the balls position. Doesn't take account of frame rate, very crude.
    function move(){
      for (var i = 0; i < $scope.balls.length; i++) {
        var ball = $scope.balls[i];
        ball.x = ball.x + ball.speed[0];
        ball.y = ball.y + ball.speed[1];
        ball.z = ball.z + ball.speed[2];
      }
    }

    // Using a move loop and event's loop.
    // events loop just happens less frequently, trying to save some cycles.
    // Should use a proper game loop here!
    function moveLoop(){
      move();
      $timeout(moveLoop);
    }
    moveLoop();

    function eventsLoop(){
      changeDir();
      maybeSpawnBall();
      $timeout(eventsLoop, 300)
    }
    eventsLoop();


    function pop(ele){
      var id = ele.id;
      ele.components.sound.playSound();
      // `pop` the ball by making transparent but give the sound time to play before removing.
      ele.setAttribute('material', 'opacity', '0');
      $timeout(()=>removeBall(id), 300);
    }

    function removeBall(id){
      var found = -1;
      for (var i = 0; i < $scope.balls.length; i++) {
        var ball = $scope.balls[i];
        if (ball.id === id) {
          found = i;
          break;
        }
      }
      if(found !== -1){
        $scope.balls.splice(found, 1);
      }
    }



    // Component to change to random color on click.
    // TODO: rather than muck around with timeout can we use a fuse cursor?
    var tracker = {};
    AFRAME.registerComponent('ball', {
      init: function () {
        if(this.el.id.substr(0, 4) === 'ball') {
          this.el.addEventListener('mouseenter', function () {
            tracker[this.id] = setTimeout((() => {
              var ele = this;
              return () =>pop(ele)
            })(), 500)
          });
          this.el.addEventListener('mouseleave', function () {
            var timeout = tracker[this.id];
            if (timeout){
              clearTimeout(timeout);
            }
          });
        }
      }
    });

  }]);