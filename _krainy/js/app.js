var App = angular.module('Map', ['ngAnimate', 'ngSanitize', 'cfp.hotkeys']);

App.directive('resizable', function($window) {
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
});

App.controller('MapController', function($scope, hotkeys) {

  $scope.loaded = true;
  $scope.state = 0;
  $scope.landHidden = false;
  $scope.svg = "";

  $scope.gallery = false;
  $scope.galleryIndex = 0;

  $scope.mapWidth = 5185;
  $scope.mapHeight = 3240;

  $scope.workingAreaWidth = 5185;
  $scope.workingAreaHeight = 3240;

  $scope.mapOffsetTop = 0;
  $scope.mapOffsetLeft = 0;

  $scope.labelX = 0;
  $scope.labelY = 0;

  $scope.bgColor = '#E1F4FD';

  $scope.mapX = 0;
  $scope.mapY = 0;

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

      $scope.bgColor = '#E1F4FD';

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

      $scope.mapScale = .5;

      $scope.mapX = 1827 * $scope.mapScale - 300;
      $scope.mapY = 1004 * $scope.mapScale;

      $scope.bgColor = 'wyspa';
    }

    else if ($scope.watchState === 2) {

      $scope.mapScale = .5;

      $scope.mapX = 1120 * $scope.mapScale - 300;
      $scope.mapY = 571 * $scope.mapScale;

      $scope.bgColor = 'magiczna';
    }

    else if ($scope.watchState === 3) {

      $scope.mapScale = .5;

      $scope.mapX = 1255 * $scope.mapScale - 300;
      $scope.mapY = -41 * $scope.mapScale;

      $scope.bgColor = 'kanion';
    }

    else if ($scope.watchState === 4) {

      $scope.mapScale = .5;

      $scope.mapX = 1256 * $scope.mapScale - 300;
      $scope.mapY = -828 * $scope.mapScale;

      $scope.bgColor = 'gory';
    }

    else if ($scope.watchState === 5) {

      $scope.mapScale = .5;

      $scope.mapX = 60 * $scope.mapScale - 300;
      $scope.mapY = -504 * $scope.mapScale;

      $scope.bgColor = 'pomost';
    }

    else if ($scope.watchState === 6) {

      $scope.mapScale = .5;

      $scope.mapX = 98 * $scope.mapScale - 300;
      $scope.mapY = 320 * $scope.mapScale;

      $scope.bgColor = 'brama';
    }

    else if ($scope.watchState === 7) {

      $scope.mapScale = .5;

      $scope.mapX = -828 * $scope.mapScale - 300;
      $scope.mapY = -366 * $scope.mapScale;

      $scope.bgColor = 'bocianowo';
    }

    else if ($scope.watchState === 8) {

      $scope.mapScale = .5;

      $scope.mapX = -687 * $scope.mapScale - 300;
      $scope.mapY = 504 * $scope.mapScale;

      $scope.bgColor = 'dolina';
    }

    else if ($scope.watchState === 9) {

      $scope.mapScale = .5;

      $scope.mapX = -519 * $scope.mapScale - 300;
      $scope.mapY = 967 * $scope.mapScale;

      $scope.bgColor = 'przyladek';
    }

    else if ($scope.watchState === 10) {

      $scope.mapScale = .5;

      $scope.mapX = -1410 * $scope.mapScale - 300;
      $scope.mapY = 354 * $scope.mapScale;

      $scope.bgColor = 'kraina';
    }

    else if ($scope.watchState === 11) {

      $scope.mapScale = .55;

      $scope.mapX = -1194 * $scope.mapScale - 300;
      $scope.mapY = -663 * $scope.mapScale;

      $scope.bgColor = 'szyfrowisko';
    }

    else if ($scope.watchState === 12) {

      $scope.mapScale = .55;

      $scope.mapX = -1985 * $scope.mapScale - 300;
      $scope.mapY = -885 * $scope.mapScale;

      $scope.bgColor = 'ortogrod';
    }

    else if ($scope.watchState === 13) {

      $scope.mapScale = .5

      $scope.mapX = -1665 * $scope.mapScale - 300;
      $scope.mapY = -1308 * $scope.mapScale;

      $scope.bgColor = 'poznajmy';
    }

    else if ($scope.watchState === 14) {

      $scope.mapScale = .5

      $scope.mapX = -1231 * $scope.mapScale - 300;
      $scope.mapY = -1194 * $scope.mapScale;

      $scope.bgColor = 'oboz';
    }
  });

  $scope.mapReset = function() {

    if ($scope.conditionOne === true || $scope.conditionTwo === true || $scope.conditionThree === true || $scope.conditionFour === true) {
      $scope.mapScale = $scope.mapScaleUpdated;
      $scope.state = 0;
      $scope.mapX = 0;
      $scope.mapY = 0;
    }

    else {
      $scope.mapScale = 1;
      $scope.state = 0;
      $scope.mapX = 0;
      $scope.mapY = 0;
    }
  }

  $scope.items = [
    {
      title: "Wyspa gramatolubów",
      links: [
        {
          title: 'Ryczą w klasie, dokazują, czyli czasownik w akcji',
          href: 'http://platforma.contentplus.pl/editor/preview/10341'
        },
        {
          title: 'O rzeczowniku rzeczy kilka',
          href: 'http://platforma.contentplus.pl/editor/preview/10430'
        },
        {
          title: 'W okolicy bezokolicznika',
          href: 'http://platforma.contentplus.pl/editor/preview/10433'
        },
        {
          title: 'Czasem dziewczyna, czasem chłopak',
          href: 'http://platforma.contentplus.pl/editor/preview/10438'
        },
        {
          title: 'Różne aspekty czasownika',
          href: 'http://platforma.contentplus.pl/editor/preview/10443'
        },
        {
          title: 'Nadszedł czas na czas',
          href: 'http://platforma.contentplus.pl/editor/preview/10454'
        },
        {
          title: 'Urodzaj na rodzaj',
          href: 'http://platforma.contentplus.pl/editor/preview/10461'
        },
        {
          title: 'W przymiotnikowym królestwie barw, smaków i zapachów',
          href: 'http://platforma.contentplus.pl/editor/preview/10484'
        },
        {
          title: 'Przymiotnik do rzeczownika? Jak ulał!',
          href: 'http://platforma.contentplus.pl/editor/preview/10486'
        },
        {
          title: 'Na raz, na dwa, na trzy – liczebniki!',
          href: 'http://platforma.contentplus.pl/editor/preview/10488'
        },
        {
          title: 'Przebiegle i skutecznie – tak działa detektyw',
          href: 'http://platforma.contentplus.pl/editor/preview/10493'
        },
        {
          title: 'Trzymaj rękę na pulsie, rozpoznawaj wypowiedzenia',
          href: 'http://platforma.contentplus.pl/editor/preview/10495'
        },
        {
          title: 'Przy imieniu stoi, nikogo się nie boi',
          href: 'http://platforma.contentplus.pl/editor/preview/10499'
        }
      ]
    }
    ,{
      title: "Magiczna jaskinia",
      links: [
        {
          title: 'Wypij mnie, wypij',
          href: 'http://platforma.contentplus.pl/editor/preview/10498'
        },
        {
          title: 'O magicznym zwierciadle',
          href: 'http://platforma.contentplus.pl/editor/preview/10500'
        },
        {
          title: 'Magiczni pomocnicy',
          href: 'http://platforma.contentplus.pl/editor/preview/10502'
        },
        {
          title: 'Dostępne tylko dla dzieci',
          href: 'http://platforma.contentplus.pl/editor/preview/10501'
        },
      ]
    }
    ,{
      title: "Kanion snów",
      links: [
        {
          title: 'Pora na dobranoc',
          href: 'http://platforma.contentplus.pl/editor/preview/10482'
        },
        {
          title: 'Fantastyczna wyobraźnia Vincenta van Gogha',
          href: 'http://platforma.contentplus.pl/editor/preview/10483'
        },
        {
          title: 'Co to są gramasożyty?',
          href: 'http://platforma.contentplus.pl/editor/preview/10485'
        },
        {
          title: 'Kiedy rozum śpi',
          href: 'http://platforma.contentplus.pl/editor/preview/10487'
        },
        {
          title: 'Jak sobie pościelesz…',
          href: 'http://platforma.contentplus.pl/editor/preview/10489'
        },
        {
          title: 'Dlaczego skarpetki gubią swoje pary?',
          href: 'http://platforma.contentplus.pl/editor/preview/10490'
        },
        {
          title: 'Czy można malować słowem?',
          href: 'http://platforma.contentplus.pl/editor/preview/10491'
        },
        {
          title: 'Jak opisać świat',
          href: 'http://platforma.contentplus.pl/editor/preview/10492'
        },
        {
          title: 'Sny to bardzo tajemnicze zjawiszcza',
          href: 'http://platforma.contentplus.pl/editor/preview/10494'
        },
        {
          title: 'Jak wyczarować sny?',
          href: 'http://platforma.contentplus.pl/editor/preview/10497'
        },
      ]
    }
    ,{
      title: "Góry fantazji",
      links: [
        {
          title: 'Po co nam fantazja',
          href: 'http://platforma.contentplus.pl/editor/preview/10464'
        },
        {
          title: 'Jak rozpoznać czarownicę?',
          href: 'http://platforma.contentplus.pl/editor/preview/10466'
        },
        {
          title: 'O długowłosej pannie uwięzionej w wieży',
          href: 'http://platforma.contentplus.pl/editor/preview/10469'
        },
        {
          title: 'Czy to jeszcze baśń?',
          href: 'http://platforma.contentplus.pl/editor/preview/10471'
        },
        {
          title: 'Jak pokonać bestię?',
          href: 'http://platforma.contentplus.pl/editor/preview/10472'
        },
        {
          title: 'Czy lustro może służyć do obrony?',
          href: 'http://platforma.contentplus.pl/editor/preview/10474'
        },
        {
          title: 'Skarb królowej Kingi',
          href: 'http://platforma.contentplus.pl/editor/preview/10475'
        },
        {
          title: 'Krasnoludki są na świecie',
          href: 'http://platforma.contentplus.pl/editor/preview/10476'
        },
        {
          title: 'Smutek w świecie baśni',
          href: 'http://platforma.contentplus.pl/editor/preview/10478'
        },
        {
          title: 'Kraina Andersena',
          href: 'http://platforma.contentplus.pl/editor/preview/10479'
        }
      ]
    }
    ,{
      title: "Pomost teatralny",
      links: [
        {
          title: 'Co to jest teatr?',
          href: 'http://platforma.contentplus.pl/editor/preview/10505'
        },
        {
          title: 'Nie pomoże dobra wróżka…',
          href: 'http://platforma.contentplus.pl/editor/preview/10506'
        },
        {
          title: 'Z wizytą w teatrze lalek',
          href: 'http://platforma.contentplus.pl/editor/preview/10508'
        },
        {
          title: 'W teatrze dźwiękowym',
          href: 'http://platforma.contentplus.pl/editor/preview/10509'
        },
      ]
    }
    ,{
      title: "Brama wyobraźni",
      links: [
        {
          title: 'Gdzie pada śnieżek niebieski?',
          href: 'http://platforma.contentplus.pl/editor/preview/10459'
        },
        {
          title: 'O czym marzy pies?',
          href: 'http://platforma.contentplus.pl/editor/preview/10460'
        },
        {
          title: 'Książka: niekończąca się historia',
          href: 'http://platforma.contentplus.pl/editor/preview/10462'
        },
        {
          title: 'Portret do góry nogami',
          href: 'http://platforma.contentplus.pl/editor/preview/10463'
        },
      ]
    }
    ,{
      title: "Bocianowo",
      links: [
        {
          title: 'Rozmowa, czyli jak wymieniać myśli za pomocą słów',
          href: 'http://platforma.contentplus.pl/editor/preview/10451'
        },
        {
          title: 'Tutaj, czyli w domu',
          href: 'http://platforma.contentplus.pl/editor/preview/10452'
        },
        {
          title: 'Mała Ojczyzna',
          href: 'http://platforma.contentplus.pl/editor/preview/10453'
        },
        {
          title: 'Wyzwanie: sprzątanie!',
          href: 'http://platforma.contentplus.pl/editor/preview/10455'
        },
        {
          title: 'U nas jest fajnie!',
          href: 'http://platforma.contentplus.pl/editor/preview/10456'
        },
        {
          title: 'Wspólna pieśń',
          href: 'http://platforma.contentplus.pl/editor/preview/10457'
        },
        {
          title: 'Urodziny Ojczyzny',
          href: 'http://platforma.contentplus.pl/editor/preview/10458'
        },
      ]
    }
    ,{
      title: "Dolina wynalazców",
      links: [
        {
          title: 'Czas: jak go bronić przed pożeraczami',
          href: 'http://platforma.contentplus.pl/editor/preview/10511'
        },
        {
          title: 'Patrzeć mądrze w telewizor',
          href: 'http://platforma.contentplus.pl/editor/preview/10513'
        },
        {
          title: 'Zupełnie nowy świat',
          href: 'http://platforma.contentplus.pl/editor/preview/10514'
        },
      ]
    }
    ,{
      title: "Przylądek śmiechu",
      links: [
        {
          title: 'Zarażamy śmiechem',
          href: 'http://platforma.contentplus.pl/editor/preview/10515'
        },
        {
          title: 'Dlaczego się śmiejemy?',
          href: 'http://platforma.contentplus.pl/editor/preview/10518'
        },
        {
          title: 'Mój pamiętniku',
          href: 'http://platforma.contentplus.pl/editor/preview/10519'
        },
        {
          title: 'Niedoparek przyjacielem pana Wawrzyńca',
          href: 'http://platforma.contentplus.pl/editor/preview/10520'
        },
        {
          title: 'O urwisie ze Smalandii',
          href: 'http://platforma.contentplus.pl/editor/preview/10521'
        },
        {
          title: 'Idzie mrówka przez dżunglę, czyli jak napisać opowiadanie',
          href: 'http://platforma.contentplus.pl/editor/preview/10522'
        },
        {
          title: 'Wszystkiego najlepszego, lesie!',
          href: 'http://platforma.contentplus.pl/editor/preview/10523'
        },
        {
          title: 'Przyjęcie dla Kłapouchego',
          href: 'http://platforma.contentplus.pl/editor/preview/10524'
        },
        {
          title: 'Urodziny Kłapouchego',
          href: 'http://platforma.contentplus.pl/editor/preview/10525'
        },
        {
          title: 'Tak się kiedyś bawiono',
          href: 'http://platforma.contentplus.pl/editor/preview/10526'
        },
      ]
    }
    ,{
      title: "Kraina bliskoludów",
      links: [
        {
          title: 'Czy istnieją ideały?',
          href: 'http://platforma.contentplus.pl/editor/preview/10345'
        },
        {
          title: 'Jak jest jak…',
          href: 'http://platforma.contentplus.pl/editor/preview/10346'
        },
        {
          title: 'Słownik: zawsze pod ręką!',
          href: 'http://platforma.contentplus.pl/editor/preview/10347'
        },
        {
          title: 'Rodzina, ród, dynastia',
          href: 'http://platforma.contentplus.pl/editor/preview/10428'
        },
        {
          title: 'Co o nich wiesz?',
          href: 'http://platforma.contentplus.pl/editor/preview/10429'
        },
        {
          title: 'Rodzinne więzi',
          href: 'http://platforma.contentplus.pl/editor/preview/10431'
        },
        {
          title: 'Kochający superbohater',
          href: 'http://platforma.contentplus.pl/editor/preview/10432'
        },
        {
          title: 'Najważniejszy człowiek na świecie',
          href: 'http://platforma.contentplus.pl/editor/preview/10434'
        },
        {
          title: 'Nie trzeba w lesie kląć',
          href: 'http://platforma.contentplus.pl/editor/preview/10435'
        },
        {
          title: 'Żyć jak pies z kotem czy jak bratnie dusze?',
          href: 'http://platforma.contentplus.pl/editor/preview/10436'
        },
        {
          title: 'Bracia: trochę rodzina, trochę przyjaciele',
          href: 'http://platforma.contentplus.pl/editor/preview/10437'
        },
        {
          title: 'Dom jest tam, gdzie jesteśmy wszyscy razem',
          href: 'http://platforma.contentplus.pl/editor/preview/10439'
        },
        {
          title: 'Dom – czy każdy go ma?',
          href: 'http://platforma.contentplus.pl/editor/preview/10441'
        },
        {
          title: 'Jak dobrze mieć sąsiada!',
          href: 'http://platforma.contentplus.pl/editor/preview/10442'
        },
        {
          title: 'Na kolacji u państwa Bobrów',
          href: 'http://platforma.contentplus.pl/editor/preview/10444'
        },
        {
          title: 'Gotować każdy może',
          href: 'http://platforma.contentplus.pl/editor/preview/10445'
        },
        {
          title: 'Czy trudno znaleźć przyjaciela?',
          href: 'http://platforma.contentplus.pl/editor/preview/10446'
        },
        {
          title: 'Prawdziwy przyjaciel: kto to taki?',
          href: 'http://platforma.contentplus.pl/editor/preview/10447'
        },
        {
          title: 'Oswoić znaczy stworzyć więzy',
          href: 'http://platforma.contentplus.pl/editor/preview/10448'
        },
        {
          title: 'Jak rozmawiać ze zwierzętami? Jak zrozumieć człowieka?',
          href: 'http://platforma.contentplus.pl/editor/preview/10449'
        },
        {
          title: 'Szczęście na końskim grzbiecie',
          href: 'http://platforma.contentplus.pl/editor/preview/10450'
        }
      ]
    }
    ,{
      title: "Szyfrowisko",
      links: [
        {
          title: 'Zaszyfrowana wiadomość',
          href: 'http://platforma.contentplus.pl/editor/preview/10252'
        },
        {
          title: 'Co kryją znaki?',
          href: 'http://platforma.contentplus.pl/editor/preview/10254'
        },
        {
          title: 'Słowa, które ranią. Słowa, które leczą',
          href: 'http://platforma.contentplus.pl/editor/preview/10258'
        },
        {
          title: 'Czy w szkole uczą czyhania i obrzydzielenia?',
          href: 'http://platforma.contentplus.pl/editor/preview/10259'
        },
        {
          title: 'Detektywie, zgłoś się!',
          href: 'http://platforma.contentplus.pl/editor/preview/10340'
        },
        {
          title: 'Tacy sami',
          href: 'http://platforma.contentplus.pl/editor/preview/10343'
        },
        {
          title: 'W galerii sztuki',
          href: 'http://platforma.contentplus.pl/editor/preview/10342'
        },
      ]
    }
    ,{
      title: "Ortogród",
      links: [
        {
          title: 'Próba królewskiej córki',
          href: 'http://platforma.contentplus.pl/editor/preview/10467'
        },
        {
          title: 'O malutkim UparciuchU',
          href: 'http://platforma.contentplus.pl/editor/preview/10468'
        },
        {
          title: 'Zuchwały chochlik kocha śmiech',
          href: 'http://platforma.contentplus.pl/editor/preview/10503'
        },
        {
          title: 'Hałas z błahego powodu',
          href: 'http://platforma.contentplus.pl/editor/preview/10504'
        }
      ]
    }
    ,{
      title: "Poznajmy się",
      links: [
        {
          title: 'Poznajmy się',
          href: 'http://platforma.contentplus.pl/editor/preview/10333'
        }
      ]
    }
    ,{
      title: "Obóz podróżników",
      links: [
        {
          title: 'Wakacyjne opowieści',
          href: 'http://platforma.contentplus.pl/editor/preview/10334'
        },
        {
          title: 'Adresowe ABC',
          href: 'http://platforma.contentplus.pl/editor/preview/10335'
        },
        {
          title: 'Pocztówka, widokówka, adresowa łamigłówka',
          href: 'http://platforma.contentplus.pl/editor/preview/10336'
        },
        {
          title: 'Kości zostały rzucone',
          href: 'http://platforma.contentplus.pl/editor/preview/10337'
        },
        {
          title: 'Listy z podróży',
          href: 'http://platforma.contentplus.pl/editor/preview/10338'
        },
        {
          title: 'Napisz list jak poeta',
          href: 'http://platforma.contentplus.pl/editor/preview/10339'
        },
      ]
    }
  ]

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
    combo: '1',
    callback: function() {
      $scope.state = 1;
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
});

// wyspa
// magiczna
// kanion
// gory
// pomost
// brama
// bocianowo
// dolina
// przylądek
// kraina
// szyfrowisko
// ortogrod
// poznajmy
// oboz

// {
//   title: 'XXX',
//   href: 'YYY'
// },
