var App = angular.module('Map', ["ngAnimate", "cfp.hotkeys", "ngSanitize"])
  .directive('resizable', function($window) {
    return function($scope) {
      $scope.initializeWindowSize = function() {
        $scope.windowHeight = $window.innerHeight;
        $scope.windowWidth = $window.innerWidth;
      };
      angular.element($window).bind("resize", function() {
        $scope.initializeWindowSize();
        $scope.$apply();
      });
      $scope.initializeWindowSize();
    }
  })
  .controller('MapController', function($scope, hotkeys) {

    $scope.loaded = true;
    $scope.introActive = false;
    $scope.state = 0;
    $scope.definitionHidden = false;
    $scope.svg = "";

    $scope.mapWidth = 4889;
    $scope.mapHeight = 2750;

    $scope.workingAreaWidth = 4889;
    $scope.workingAreaHeight = 2750;

    $scope.mapOffsetTop = 0;
    $scope.mapOffsetLeft = 0;

    $scope.labelX = 0;
    $scope.labelY = 0;

    $scope.mapX = 0;
    $scope.mapXoffset = 0;
    $scope.mapY = 0;
    $scope.mapYoffset = 0;

    // $scope.state = 1;

    $scope.increase = function () {

      $scope.state += 1;
    };

    $scope.decrease = function () {

      $scope.state -= 1;
    };

    $scope.$watch('$viewContentLoaded', function(){
      $scope.loaded = true;
    });

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

    $scope.$watchGroup(['windowWidth', 'windowHeight', 'mapIsBiggerX', 'mapIsBiggerY', 'state'], function(newVal, oldVal) {
        // what's the viewport size
        $scope.watchWindowWidth = newVal[0];
        $scope.watchWindowHeight = newVal[1];

        // is map bigger
        $scope.watchMapIsBiggerX = newVal[2];
        $scope.watchMapIsBiggerY = newVal[3];

        // state
        $scope.watchState = newVal[4];

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

        if ($scope.state === 0) {

          if ($scope.watchMapIsBiggerX() == true && $scope.widthScalingY <= $scope.watchWindowHeight) {

              $scope.mapScale = $scope.scaleWidth;
              $scope.mapScaleUpdated = $scope.scaleWidth;
              $scope.conditionOne = true;
              $scope.conditionTwo = false;
              $scope.conditionThree = false;
              $scope.conditionFour = false;
          }

          else if ($scope.watchMapIsBiggerX() == true && $scope.widthScalingY > $scope.watchWindowHeight) {

            $scope.mapScale = $scope.scaleHeight;
            $scope.mapScaleUpdated = $scope.scaleHeight;
            $scope.conditionTwo = true;
            $scope.conditionOne = false;
            $scope.conditionThree = false;
            $scope.conditionFour = false;
          }

          else if ($scope.watchMapIsBiggerY() == true && $scope.widthScalingX <= $scope.watchWindowWidth) {

              $scope.mapScale = $scope.scaleHeight;
              $scope.mapScaleUpdated = $scope.scaleHeight;
              $scope.conditionThree = true;
              $scope.conditionOne = false;
              $scope.conditionTwo = false;
              $scope.conditionFour = false;
          }
        }

        else if ($scope.state !== 0) {

          // $scope.mapScale = 1;
          $scope.conditionFour = true;

          if ($scope.watchMapIsBiggerX() == true && $scope.widthScalingY <= $scope.watchWindowHeight) {

              $scope.mapScaleUpdated = $scope.scaleWidth;
              $scope.conditionOne = true;
              $scope.conditionTwo = false;
              $scope.conditionThree = false;
              $scope.conditionFour = false;
          }

          else if ($scope.watchMapIsBiggerX() == true && $scope.widthScalingY > $scope.watchWindowHeight) {

            $scope.mapScaleUpdated = $scope.scaleHeight;
            $scope.conditionOne = false;
            $scope.conditionTwo = true;
            $scope.conditionThree = false;
            $scope.conditionFour = false;
          }

          else if ($scope.watchMapIsBiggerY() == true && $scope.widthScalingX <= $scope.watchWindowWidth) {

              $scope.mapScaleUpdated = $scope.scaleHeight;
              $scope.conditionOne = false;
              $scope.conditionTwo = false;
              $scope.conditionThree = true;
              $scope.conditionFour = false;
          }
        }

        if ($scope.watchState === 0) {

          if ($scope.watchMapIsBiggerX() == true && $scope.widthScalingY <= $scope.watchWindowHeight) {

              $scope.mapScale = $scope.scaleWidth;
              $scope.mapScaleUpdated = $scope.scaleWidth;
              $scope.conditionOne = true;
              $scope.conditionTwo = false;
              $scope.conditionThree = false;
              $scope.conditionFour = false;
          }

          else if ($scope.watchMapIsBiggerX() == true && $scope.widthScalingY > $scope.watchWindowHeight) {

            $scope.mapScale = $scope.scaleHeight;
            $scope.mapScaleUpdated = $scope.scaleHeight;
            $scope.conditionTwo = true;
            $scope.conditionOne = false;
            $scope.conditionThree = false;
            $scope.conditionFour = false;
          }

          else if ($scope.watchMapIsBiggerY() == true && $scope.widthScalingX <= $scope.watchWindowWidth) {

              $scope.mapScale = $scope.scaleHeight;
              $scope.mapScaleUpdated = $scope.scaleHeight;
              $scope.conditionThree = true;
              $scope.conditionOne = false;
              $scope.conditionTwo = false;
              $scope.conditionFour = false;
          }

          $scope.mapX = 0;
          $scope.mapY = 0;
          $scope.hovering = false;
        }

        else if ($scope.watchState === 1) {

          $scope.mapScale = .3;

          $scope.mapX = 1827 * $scope.mapScale - 300;
          $scope.mapY = 1004 * $scope.mapScale;
        }

        else if ($scope.watchState === 2) {

          $scope.mapScale = .5;

          $scope.mapX = 1120 * $scope.mapScale - 300;
          $scope.mapY = 571 * $scope.mapScale;
        }

        else if ($scope.watchState === 3) {

          $scope.mapScale = .5;

          $scope.mapX = 1255 * $scope.mapScale - 300;
          $scope.mapY = -41 * $scope.mapScale;
        }

        else if ($scope.watchState === 4) {

          $scope.mapScale = .5;

          $scope.mapX = 1256 * $scope.mapScale - 300;
          $scope.mapY = -828 * $scope.mapScale;
        }

        else if ($scope.watchState === 5) {

          $scope.mapScale = .5;

          $scope.mapX = 60 * $scope.mapScale - 300;
          $scope.mapY = -504 * $scope.mapScale;
        }

        else if ($scope.watchState === 6) {

          $scope.mapScale = .5;

          $scope.mapX = 98 * $scope.mapScale - 300;
          $scope.mapY = 320 * $scope.mapScale;
        }

        else if ($scope.watchState === 7) {

          $scope.mapScale = .5;

          $scope.mapX = -828 * $scope.mapScale - 300;
          $scope.mapY = -366 * $scope.mapScale;
        }

        else if ($scope.watchState === 8) {

          $scope.mapScale = .5;

          $scope.mapX = -687 * $scope.mapScale - 300;
          $scope.mapY = 504 * $scope.mapScale;
        }

        else if ($scope.watchState === 9) {

          $scope.mapScale = .5;

          $scope.mapX = -519 * $scope.mapScale - 300;
          $scope.mapY = 967 * $scope.mapScale;
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
        $scope.test = 0;
      }

      else if ($scope.conditionTwo === true) {
        $scope.mapScale = $scope.mapScaleUpdated;
        $scope.state = 0;
        $scope.mapX = 0;
        $scope.mapY = 0;
        $scope.mapXoffset = 0;
        $scope.mapYoffset = 0;
        $scope.labelScale = ($scope.mapScale - 1) * -1 + 1;
        $scope.test = 0;
      }

      else if ($scope.conditionThree === true) {
        $scope.mapScale = $scope.mapScaleUpdated;
        $scope.state = 0;
        $scope.mapX = 0;
        $scope.mapY = 0;
        $scope.mapXoffset = 0;
        $scope.mapYoffset = 0;
        $scope.labelScale = ($scope.mapScale - 1) * -1 + 1;
        $scope.test = 0;
      }

      else if ($scope.conditionFour === true) {
        $scope.mapScale = $scope.mapScaleUpdated;
        $scope.state = 0;
        $scope.mapX = 0;
        $scope.mapY = 0;
        $scope.mapXoffset = 0;
        $scope.mapYoffset = 0;
        $scope.labelScale = ($scope.mapScale - 1) * -1 + 1;
        $scope.test = 0;
      } else {
        $scope.mapScale = 1;
        $scope.state = 0;
        $scope.mapX = 0;
        $scope.mapY = 0;
        $scope.mapXoffset = 0;
        $scope.mapYoffset = 0;
        $scope.labelScale = ($scope.mapScale - 1) * -1 + 1;
        $scope.test = 0;
      }
    }

  $scope.items = [
    {
      title: "Skóry i futra",
      description: "<p>Wysuszone na słońcu skóry i obszyte materiały znakowane były kamiennymi lub drewnianymi stemplami.</p>",
      color: "#090909",
      hasImage: false,
      imageSrc: "video/comp-01.mp4",
      x: -530,
      y: -5,
      xOffset: 0,
      yOffset: 0
    },
    {
      title: "Śmietnik",
      description: "<p>Przedmioty odnalezione na dziedzińcu, takie jak zniszczone narzędzia czy kości zwierząt, sugerują, że pełnił on funkcję śmietnika. </p>",
      color: "#090909",
      hasImage: false,
      imageSrc: "video/comp-01.mp4",
      x: -375,
      y: 75,
      xOffset: 0,
      yOffset: 0
    },
    {
      title: "Bezpieczeństwo",
      description: "<p>Aby lepiej chronić domy przed atakami wrogów, wejścia sytuowano w ich dachach. Prowadziły do nich drabiny, które umożliwiały także bezpieczną komunikację między budynkami.</p>",
      color: "#090909",
      hasImage: false,
      imageSrc: "video/comp-01.mp4",
      x: 149,
      y: -348,
      xOffset: 0,
      yOffset: 0
    },
    {
      title: "Spiżarnia",
      description: "<p>W spiżarni znajdowały się gliniane pojemniki na żywność oraz miejsce do przechowywania zboża.</p>",
      color: "#090909",
      hasImage: false,
      imageSrc: "video/comp-01.mp4",
      x: 503,
      y: -127,
      xOffset: 0,
      yOffset: 0
    },
    {
      title: "Pogrzeb",
      description: "<p>Ciała zmarłych pozostawiano na zewnątrz do momentu ich całkowitego rozkładu. W pomieszczeniach piwnicznych zakopywano już tylko kości nieboszczyków.</p>",
      color: "#090909",
      hasImage: false,
      imageSrc: "video/comp-01.mp4",
      x: 194,
      y: 124,
      xOffset: 0,
      yOffset: 0
    },
    {
      title: "Stajnia",
      description: "<p>Większa część podwórka przeznaczona była na stajnię i pomieszczenia dla owiec i kóz. Mięso tych zwierząt obok pszenicy i jęczmienia stanowiło podstawę diety mieszkańców.</p>",
      color: "#090909",
      hasImage: false,
      imageSrc: "video/comp-01.mp4",
      x: 90,
      y: 15,
      xOffset: 0,
      yOffset: 0
    },
    {
      title: "Konstrukcja budynku",
      description: "<p>Ściany domu zbudowane były z ulepionych z błota i trawy, wysuszonych na słońcu cegieł i  niekiedy wsparte drewnianymi podporami. Belki przykryte trzciną tworzyły dach. Cały budynek – ściany i dach – pokrywano mułem. Wnętrza mieszkalne tynkowano, malowano i dekorowano.</p>",
      color: "#090909",
      hasImage: false,
      imageSrc: "video/comp-01.mp4",
      x: -338,
      y: 246,
      xOffset: 0,
      yOffset: 0
    },
    {
      title: "Organizacja domu",
      description: "<p>Część mieszkalną stanowiły dwa pomieszczenia. Na środku głównej sali usytuowane było palenisko; wokół niego znajdowały się piec do przygotowywania posiłków oraz siedziska dla mieszkańców. Druga izba przeznaczona była na kuchnię i spiżarnię.</p>",
      color: "#090909",
      hasImage: false,
      imageSrc: "video/comp-01.mp4",
      x: 373,
      y: 0,
      xOffset: 0,
      yOffset: 0
    },
    {
      title: "Świątynia",
      description: "<p>Niektóre pomieszczenia miały cechy świątyń religijnych. Świadczą o tym znajdujące się w nich platformy przypominające ołtarze oraz dekoracje o obrzędowym charakterze. W malowidłach oraz płaskorzeźbach pojawiał się często motyw byka jako symbolu płodności; w pomieszczeniach znajdowano także figurki wyobrażające boginę matkę. Ściany zdobiono również przedstawieniami sępów pożerających człowieka, co odnosiło się prawdopowodbnie do rytuałów pogrzebowych.</p>",
      color: "#090909",
      hasImage: false,
      imageSrc: "video/comp-01.mp4",
      x: 263,
      y: -158,
      xOffset: 0,
      yOffset: 0
    },
  ];

  $scope.increase = function () {
    if($scope.state < $scope.items.length) {

      $scope.state += 1;
    }

    else if($scope.state === $scope.items.length) {

      $scope.state = 1;
    }
  };

  $scope.decrease = function () {
    if($scope.state > 0 ) {

      $scope.state -= 1;
    }
  };

  hotkeys.add({
    combo: 'right',
    callback: function() {
      $scope.increase();
    }
  });

  hotkeys.add({
    combo: 'left',
    callback: function() {
      $scope.decrease();
    }
  });

  hotkeys.add({
    combo: 'esc',
    callback: function() {
      $scope.state = 0;
    }
  });
})
