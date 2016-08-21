App.controller('mainController', function($scope, ngAudio, $timeout) {

  $scope.debug = false;

  $scope.stopAll = function() {
    var media = document.getElementsByClassName('audio'),
            i = media.length;

    while (i--) {
      media[i].pause();
    }
  }

  $scope.state = 0;

  $scope.definitionHidden = false;

  $scope.gallery = false;
  $scope.galleryIndex = 0;

  $scope.mapWidth = 1588;
  $scope.mapHeight = 1021;

  $scope.workingAreaWidth = 1520;
  $scope.workingAreaHeight = 820;

  $scope.bgColor = '#DC7D27';

  $scope.mapX = 0;
  $scope.mapXoffset = 0;
  $scope.mapY = 0;
  $scope.mapYoffset = 0;

  $scope.loaded = false;

  $scope.stopAll = function() {
    var media = document.getElementsByClassName('audio'),
            i = media.length;

    while (i--) {
      media[i].pause();
    }
  }

  $scope.isLoaded = function() {

    $scope.loaded = true;
  }

  $scope.galleryToggle = function() {

    if($scope.gallery === false) {
      $scope.gallery = true;
      $scope.galleryIndex = 0;
      $scope.mapScale = .8;
    } else if($scope.gallery === true) {
      $scope.gallery = false;
      $scope.mapScale = 1;

      setTimeout(function() {
        $scope.galleryIndex = 0;
      }, 1000)
    }
  }

  $scope.mapIsBiggerX = function() {

    if($scope.windowWidth < $scope.workingAreaWidth) {
      return true;
    } else {
      return false;
    }
  }

  $scope.mapIsBiggerY = function() {

    if($scope.windowHeight < $scope.workingAreaHeight) {
      return true;
    } else {
      return false;
    }
  }

  $scope.$watchGroup(['windowWidth', 'windowHeight', 'mapIsBiggerX', 'mapIsBiggerY'], function(newVal, oldVal) {
    // what's the viewport size
    $scope.watchWindowWidth = newVal[0];
    $scope.watchWindowHeight = newVal[1];

    // is map bigger
    $scope.watchMapIsBiggerX = newVal[2];
    $scope.watchMapIsBiggerY = newVal[3];

    // scale
    $scope.scaleWidth  = $scope.watchWindowWidth / $scope.workingAreaWidth;
    $scope.scaleHeight = $scope.watchWindowHeight / $scope.workingAreaHeight;

    // scaled sizes
    $scope.widthScalingX  = $scope.scaleWidth  * $scope.workingAreaWidth;
    $scope.widthScalingY  = $scope.scaleWidth  * $scope.workingAreaHeight;
    $scope.heightScalingX = $scope.scaleHeight * $scope.workingAreaWidth;
    $scope.heightScalingY = $scope.scaleHeight * $scope.workingAreaHeight;

    $scope.conditionOne   = false;
    $scope.conditionTwo   = false;
    $scope.conditionThree = false;
    $scope.conditionFour = false;

    $scope.mapScale = 1;

    if ($scope.state === 0) {

      $scope.asideOffset = 0;

      if ($scope.watchMapIsBiggerX() == true && $scope.widthScalingY <= $scope.watchWindowHeight) {

          $scope.mapScale = $scope.scaleWidth;
          $scope.mapScaleUpdated = $scope.scaleWidth;
          $scope.labelScale = ($scope.mapScale - 1) * -1 + 1;
          $scope.conditionOne = true;
          $scope.conditionTwo = false;
          $scope.conditionThree = false;
          $scope.conditionFour = false;
      }

      else if ($scope.watchMapIsBiggerX() == true && $scope.widthScalingY > $scope.watchWindowHeight) {

        $scope.mapScale = $scope.scaleHeight;
        $scope.mapScaleUpdated = $scope.scaleHeight;
        $scope.labelScale = ($scope.mapScale - 1) * -1 + 1;
        $scope.conditionTwo = true;
        $scope.conditionOne = false;
        $scope.conditionThree = false;
        $scope.conditionFour = false;
      }

      else if ($scope.watchMapIsBiggerY() == true && $scope.widthScalingX <= $scope.watchWindowWidth) {

          $scope.mapScale = $scope.scaleHeight;
          $scope.mapScaleUpdated = $scope.scaleHeight;
          $scope.labelScale = ($scope.mapScale - 1) * -1 + 1;
          $scope.conditionThree = true;
          $scope.conditionOne = false;
          $scope.conditionTwo = false;
          $scope.conditionFour = false;
      }
    }

    else if ($scope.state !== 0) {

      $scope.asideOffset = ($scope.watchWindowWidth * 35) / 100 / 2;

      $scope.mapScale = 1;
      $scope.conditionFour = true;

      if ($scope.watchMapIsBiggerX() == true && $scope.widthScalingY <= $scope.watchWindowHeight) {

          $scope.mapScaleUpdated = $scope.scaleWidth;
          $scope.labelScale = 1;
          $scope.conditionOne = true;
          $scope.conditionTwo = false;
          $scope.conditionThree = false;
          $scope.conditionFour = false;
      }

      else if ($scope.watchMapIsBiggerX() == true && $scope.widthScalingY > $scope.watchWindowHeight) {

        $scope.mapScaleUpdated = $scope.scaleHeight;
        $scope.labelScale = 1;
        $scope.conditionOne = false;
        $scope.conditionTwo = true;
        $scope.conditionThree = false;
        $scope.conditionFour = false;
      }

      else if ($scope.watchMapIsBiggerY() == true && $scope.widthScalingX <= $scope.watchWindowWidth) {

          $scope.mapScaleUpdated = $scope.scaleHeight;
          $scope.labelScale = 1;
          $scope.conditionOne = false;
          $scope.conditionTwo = false;
          $scope.conditionThree = true;
          $scope.conditionFour = false;
      }
    }
  });

  $scope.mapReset = function() {
    if ($scope.conditionOne === true) {
      $scope.mapScale = $scope.mapScaleUpdated;
      $scope.state = 0;
      $scope.mapX = 0;
      $scope.mapY = 0;
      $scope.mapXoffset = 0;
      $scope.mapYoffset = 0;
      $scope.labelScale = ($scope.mapScale - 1) * -1 + 1;
      $scope.asideOffset = 0;
    }

    else if ($scope.conditionTwo === true) {
      $scope.mapScale = $scope.mapScaleUpdated;
      $scope.state = 0;
      $scope.mapX = 0;
      $scope.mapY = 0;
      $scope.mapXoffset = 0;
      $scope.mapYoffset = 0;
      $scope.labelScale = ($scope.mapScale - 1) * -1 + 1;
      $scope.asideOffset = 0;
    }

    else if ($scope.conditionThree === true) {
      $scope.mapScale = $scope.mapScaleUpdated;
      $scope.state = 0;
      $scope.mapX = 0;
      $scope.mapY = 0;
      $scope.mapXoffset = 0;
      $scope.mapYoffset = 0;
      $scope.labelScale = ($scope.mapScale - 1) * -1 + 1;
      $scope.asideOffset = 0;
    }

    else if ($scope.conditionFour === true) {
      $scope.mapScale = $scope.mapScaleUpdated;
      $scope.state = 0;
      $scope.mapX = 0;
      $scope.mapY = 0;
      $scope.mapXoffset = 0;
      $scope.mapYoffset = 0;
      $scope.labelScale = ($scope.mapScale - 1) * -1 + 1;
      $scope.asideOffset = 0;
    } else {
      $scope.mapScale = 1;
      $scope.state = 0;
      $scope.mapX = 0;
      $scope.mapY = 0;
      $scope.mapXoffset = 0;
      $scope.mapYoffset = 0;
      $scope.labelScale = ($scope.mapScale - 1) * -1 + 1;
      $scope.asideOffset = 0;
    }
  }

  $scope.items = [
    {
      title: "Agora",
      color: "#090909",
      x: 156,
      y: 300,
      xOffset: 0,
      yOffset: 0
    }

    ,{
      title: "Teatr",
      color: "#090909",
      hasImage: true,
      x: 317,
      y: -10,
      xOffset: 0,
      yOffset: 0
    }

    ,{
      title: "Akropol",
      color: "#090909",
      x: 42,
      y: -250,
      xOffset: 0,
      yOffset: 0
    }

    ,{
      title: "Gimnazjon",
      color: "#090909",
      x: -240,
      y: 100,
      xOffset: 0,
      yOffset: 0
    }
  ];

  $scope.audioMain = [
    ngAudio.load('audio/ambient-agora-0.mp3'),
    ngAudio.load('audio/ambient-teatr-0.mp3'),
    ngAudio.load('audio/ambient-akropol-0.mp3'),
    ngAudio.load('audio/ambient-gimnazjon-0.mp3')
  ]

  $scope.audioStopAll = function() {

    $scope.audioMain[0].stop();
    $scope.audioMain[1].stop();
    $scope.audioMain[2].stop();
    $scope.audioMain[3].stop();
  }

  $scope.audioMain[0].volume = 0.1;
  $scope.audioMain[1].volume = 0.1;
  $scope.audioMain[2].volume = 0.1;
  $scope.audioMain[3].volume = 0.1;

  $scope.audioMain[0].loop = true;
  $scope.audioMain[1].loop = true;
  $scope.audioMain[2].loop = true;
  $scope.audioMain[3].loop = true;

  $scope.audioPlay = function(val) {

    $timeout(function() {
      $scope.audioMain[val].play();
    }, 1500);
  }

  $scope.audioStopAllAndPlay = function(val) {

    $scope.audioMain[0].stop();
    $scope.audioMain[1].stop();
    $scope.audioMain[2].stop();
    $scope.audioMain[3].stop();

    $timeout(function() {
        // $scope.$apply(function () {
          $scope.audioMain[val].play();
      // });
    }, 1000);
  }
});