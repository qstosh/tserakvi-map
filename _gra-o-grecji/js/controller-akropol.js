App.controller('akropolController', ['$scope', function($scope) {

  $scope.stateAkropol = 0;

  $scope.dataAkropol = [
    // 0
    {
      id: 0,
      audio: [
        {
          itemOne: 'audio/akropol-0.mp3',
          itemTwo: 'audio/akropol-0.ogg',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>Powoli wspinasz się na wysokie i strome wzgórze. Miasto z góry wydaje się takie małe… Na szczycie wzniesienia widzisz wiele potężnych budowli z marmuru. Są to świątynie olimpijskich bogów. Znajdujesz się w religijnym centrum Aten, czyli na Akropolu. Liczni Ateńczycy przybyli tu, aby złożyć ofiarę swoim bogom. Spora grupa skupiła się wokół pieśniarzy, którzy recytują coś śpiewnym głosem.</p>',
      content: [
        {
          id: 1,
          option: 'Odwiedzam świątynie i przyglądam się posągom bogów.'
        }
        ,{
          id: 2,
          option: 'Przysłuchuję się pieśniarzom.'
        }
      ]
    }
    // 1
    ,{
      id: 1,
      audio: [
      ],
      media: [
        {
          item: '<img src="images/Akropol-1.svg" alt="">',
          caption: 'Posągi'
        }
        ,{
          item: '<img src="images/Akropol-1.11.svg" alt="">',
          caption: '<h3>Zeus</h3><p>Najważniejszym bóstwem dla starożytnych Greków był Zeus, uważany za ojca bogów i ludzi. Nazywano go Gromowładnym i przedstawiano zazwyczaj z piorunem w ręce. Według mitów zsyłał deszcz, burze i błyskawice. Siedzibą Zeusa była góra Olimp, a najsłynniejsza świątynia znajdowała się w Olimpii.</p>'
        }
        ,{
          item: '<img src="images/Akropol-1.12.svg" alt="">',
          caption: '<h3>Atena</h3><p>Według mitu Atena narodziła się, wyskakując z głowy Zeusa. Była boginią-wojowniczką, dlatego przedstawiano ją zwykle w hełmie, z włócznią i tarczą. Grecy uważali ją także za boginię mądrości. Jej ulubionym ptakiem była sowa. Najbardziej czczono Atenę w Atenach, gdzie na wzgórzu Akropol zbudowano jej wspaniałą świątynię – Partenon.</p>'
        }
        ,{
          item: '<img src="images/Akropol-1.13.svg" alt="">',
          caption: '<h3>Apollo</h3><p>Apollo był bogiem słońca, muzyki i poezji. Grecy wyobrażali go sobie jako pięknego młodzieńca z lirą w ręku. Apollo był też opiekunem wróżbiarzy. W jego świątyni w Delfach znajdowała się najsłynniejsza w całej Helladzie wyrocznia. Przybywali tam mieszkańcy z różnych miast i krain, by poznać swoją przyszłość lub zapytać o radę.</p>'
        }
        ,{
          item: '<img src="images/Akropol-1.14.svg" alt="">',
          caption: '<h3>Posejdon</h3><p>Posejdon był bogiem wód – władcą mórz, rzek, jezior i źródeł. Przedstawiono go zazwyczaj jako starszego mężczyznę z trójzębem w ręce. Gdy nim uderzał, wywoływał trzęsienie ziemi. Jego królestwem miała być mityczna Atlantyda.</p>'
        }
      ],
      desc: '',
      content: [
      ]
    }
    // 2
    ,{
      id: 2,
      audio: [
      ],
      media: [
        {
          item: '<img src="images/Akropol-2.svg" alt="">',
          caption: '<p>Przeglądnij galerię</p>'
        }
        ,{
          item: '<img src="images/Akropol-2.1.svg" alt="">',
          caption: '<h3>Herakles i lew nemejski</h3><p>Herakles gołymi rękoma udusił lwa, który pożerał ludzi i ich stada. Z zabitego zwierzęcia zdarł skórę i odtąd używał jej jako własnego ubioru. Była bowiem odporna na ogień i nie można jej było przeciąć mieczem. Z głowy zabitego lwa heros sporządził sobie hełm.</p>'
        }
        ,{
          item: '<img src="images/Akropol-2.2.svg" alt="">',
          caption: '<h3>Herakles i Hydra lernejska</h3><p>Herakles zabił Hydrę, która niszczyła zbiory i pożerała bydło. Potwór przypominał węża o wielu głowach, a jego oddech był zabójczy. Herakles pokonał Hydrę płonącymi strzałami i mieczem. Nie było to łatwe, gdyż odcięte głowy Hydry natychmiast wyrastały. Aby temu zapobiec, heros wypalał zadane rany ogniem.</p>'
        }
        ,{
          item: '<img src="images/Akropol-2.3.svg" alt="">',
          caption: '<h3>Odyseusz i koń trojański</h3><p>Grecy przez 10 lat próbowali zdobyć Troję. Wreszcie Odyseusz, król Itaki, wpadł na chytry pomysł. Grecy zbudowali wielkiego drewnianego konia, wsiedli na okręty i udali, że odpływają do ojczyzny. Trojanie wciągnęli konia do miasta. Jednak nocą z wnętrza konia wydostali się ukryci tam Grecy. Otworzyli bramy towarzyszom, którzy tymczasem przybili po cichu do brzegu. Troja została zdobyta.</p>'
        }
        ,{
          item: '<img src="images/Akropol-2.4.svg" alt="">',
          caption: '<h3>Odyseja</h3><p>Po zakończeniu wojny trojańskiej Odyseusz postanowił wrócić do domu. Rozzłościł jednak boga Posejdona. Obrażony władca mórz tak przeszkadzał Odyseuszowi, że heros przez 10 lat tułał się po morzach. W tym czasie przeżył wiele niesamowitych przygód. Wreszcie udało mu się powrócić na ojczystą wyspę Itakę, gdzie czekała na niego wierna żona Penelopa.</p>'
        }
      ],
      desc: '',
      content: [
      ]
    }
  ]

  $scope.optionAkropol = {
    name: 0
  }

  $scope.galleryAkropolIndex = 1;

  $scope.galleryAkropolIndex = 1;

  $scope.setState = function() {

    $scope.stateAkropol = $scope.optionAkropol.name;
  }

  $scope.back = false;

  $scope.backTimeout = function() {

    setTimeout(function () {
      $scope.$apply(function () {
          $scope.back = false;
      });
    }, 1000);
  }
}]);