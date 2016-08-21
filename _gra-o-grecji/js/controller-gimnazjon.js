App.controller('gimnazjonController', ['$scope', function($scope) {

  $scope.stateGimnazjon = 0;

  $scope.dataGimnazjon = [
    // 0
    {
      id: 0,
      audio: [
        {
          itemOne: 'audio/gimnazjon-0.mp3',
          itemTwo: 'audio/gimnazjon-0.ogg',
          caption: ''
        }
      ],
      media: [],
      desc: '<p>Wkraczasz na teren gimnazjonu – zespołu obiektów przeznaczonych do ćwiczeń fizycznych. Dostrzegasz różne budowle, bieżnię, a także miejsce do trenowania zapasów. Wszędzie pełno młodych chłopców, którzy uprawiają z niezwykłą zaciętością różne dyscypliny sportu. Ich wysiłkom uważnie przygląda się siwobrody mężczyzna - prawdopodobnie ich trener.</p>',
      content: [
        {
          id: 1,
          option: 'Przyglądam się uważniej trenującym.'
        }
        ,{
          id: 2,
          option: 'Próbuję porozmawiać z trenerem.'
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
          item: '<img src="images/Gimnazjon-1.1.svg" alt="">',
          caption: 'Rzut dyskiem'
        }
        ,{
          item: '<img src="images/Gimnazjon-1.2.svg" alt="">',
          caption: 'Skok w dal'
        }
        ,{
          item: '<img src="images/Gimnazjon-1.3.svg" alt="">',
          caption: 'Bieg'
        }
        ,{
          item: '<img src="images/Gimnazjon-1.4.svg" alt="">',
          caption: 'Rzut oszczepem'
        }
        ,{
          item: '<img src="images/Gimnazjon-1.5.svg" alt="">',
          caption: 'Zapasy'
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
        {
          itemOne: 'audio/gimnazjon-2.mp3',
          itemTwo: 'audio/gimnazjon-2.ogg',
          caption: ''
        }
      ],
      media: [
      ],
      desc: '<p>Witaj! Przyszedłeś popatrzeć, jak nasi chłopcy przygotowują się do nadchodzących igrzysk? Mamy kilku mocnych zawodników. Tym razem wieńce laurowe trafią do Aten!</p>',
      content: [
        {
          id: 2.1,
          option: 'Opowiedz o tym miejscu.'
        }
        ,{
          id: 2.2,
          option: 'Opowiedz o sobie.'
        }
        ,{
          id: 2.3,
          option: 'Opowiedz o igrzyskach.'
        }
        ,{
          id: 2.4,
          option: 'Opowiedz o wieńcu laurowym.'
        }
        ,{
          id: 0,
          option: 'Do zobaczenia.'
        }
      ]
    }
    // 2.1
    ,{
      id: 2.1,
      audio: [
        {
          itemOne: 'audio/gimnazjon-2.1.mp3',
          itemTwo: 'audio/gimnazjon-2.1.ogg',
          caption: ''
        }
      ],
      media: [
      ],
      desc: '<p>Znajdujemy się w gimnazjonie, czyli miejscu przeznaczonym do ćwiczeń fizycznych. My, Ateńczycy, podobnie jak inni Hellenowie, przywiązujemy wielką wagę do zdrowego ciała i wysokiej sprawności. Chłopcy miesiącami przygotowują się do igrzysk, trenując pięciobój oraz inne dyscypliny sportu.</p>',
      content: [
        {
          id: 2.11,
          option: 'Opowiedz mi o pięcioboju.'
        }
        ,{
          id: 2.12,
          option: 'Opowiedz mi o pozostałych dyscyplinach sportu.'
        }
        ,{
          id: 2.13,
          option: 'Czy tylko chłopcy trenują?'
        }
        ,{
          id: 2,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 2.11
    ,{
      id: 2.11,
      audio: [
        {
          itemOne: 'audio/gimnazjon-2.11.mp3',
          itemTwo: 'audio/gimnazjon-2.11.ogg',
          caption: ''
        }
      ],
      media: [
      ],
      desc: '<p>Wystarczy się trochę rozejrzeć. Tam widzisz chłopców trenujących bieganie. Jest to najważniejsza i najstarsza konkurencja. Tuż obok nich odbywają się treningi rzutów - dyskiem oraz oszczepem. Ćwiczymy również skoki w dal i zapasy. Wszystkie wymienione przeze mnie konkurencje składają się na pięciobój, rozgrywany jednego dnia.</p>',
      content: [
        {
          id: 2.1,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 2.12
    ,{
      id: 2.12,
      audio: [
        {
          itemOne: 'audio/gimnazjon-2.12.mp3',
          itemTwo: 'audio/gimnazjon-2.12.ogg',
          caption: ''
        }
      ],
      media: [
      ],
      desc: '<p>Oprócz pięcioboju chłopcy trenują boks, a także pankration. Trudne słowo? Podobnie jak sama dyscyplina. To połączenie boksu i zapasów. Bardzo niebezpieczne… Wracając jednak do tematu – uwielbiamy również wyścigi rydwanów oraz bieg w pełnym uzbrojeniu wojennym.</p>',
      content: [
        {
          id: 2.1,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 2.13
    ,{
      id: 2.13,
      audio: [
        {
          itemOne: 'audio/gimnazjon-2.13.mp3',
          itemTwo: 'audio/gimnazjon-2.13.ogg',
          caption: ''
        }
      ],
      media: [
      ],
      desc: '<p>Tak, uważamy, że kobiety nie mogą brać udziału w igrzyskach.</p>',
      content: [
        {
          id: 2.1,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 2.2
    ,{
      id: 2.2,
      audio: [
        {
          itemOne: 'audio/gimnazjon-2.2.mp3',
          itemTwo: 'audio/gimnazjon-2.2.ogg',
          caption: ''
        }
      ],
      media: [
      ],
      desc: '<p>Młodzi ludzie mają zapał i energię, ale to nie wystarczy. Potrzebują kogoś doświadczonego, kto pomoże im wyeliminować błędy i podpowie, jak zadbać o dietę. To właśnie moja rola - jestem trenerem.</p>',
      content: [
        {
          id: 2,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 2.3
    ,{
      id: 2.3,
      audio: [
        {
          itemOne: 'audio/gimnazjon-2.3.mp3',
          itemTwo: 'audio/gimnazjon-2.3.ogg',
          caption: ''
        }
      ],
      media: [
      ],
      desc: '<p>Igrzyska to wielkie zawody sportowe ku czci boga Zeusa, na które czekają wszyscy w całej Helladzie. Raz na cztery lata zaprzestajemy wszelkich wojen i wyruszamy do Olimpii, gdzie igrzyska się odbywają. Każdy chciałby zostać ich zwycięzcą albo przynajmniej wygrać w jednej konkurencji.</p>',
      content: [
        {
          id: 2.31,
          option: 'Zaprzestajecie wojen?'
        }
        ,{
          id: 2.32,
          option: 'Opowiedz o Olimpii.'
        }
        ,{
          id: 2.33,
          option: 'Opowiedz o Zeusie.'
        }
        ,{
          id: 2.34,
          option: 'Opowiedz mi o konkurencjach na igrzyskach.'
        }
        ,{
          id: 2.35,
          option: 'Opowiedz o zwycięstwie w igrzyskach.'
        }
        ,{
          id: 2,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 2.32
    ,{
      id: 2.32,
      audio: [
        {
          itemOne: 'audio/gimnazjon-2.32.mp3',
          itemTwo: 'audio/gimnazjon-2.32.ogg',
          caption: ''
        }
      ],
      media: [
      ],
      desc: '<p>To miasto na zachód od Aten. Właśnie tam oddajemy Zeusowi szczególną cześć. Składamy mu ofiary, a najlepsi spośród nas biorą udział w sportowych zmaganiach, czyli w igrzyskach. Od nazwy Olimpia pochodzi słowo olimpiada. Dla nas, Hellenów, oznacza ono czas od jednych igrzysk sportowych do drugich. Często mówimy także o igrzyskach olimpijskich.</p>',
      content: [
        {
          id: 2.3,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 2.33
    ,{
      id: 2.33,
      audio: [
        {
          itemOne: 'audio/gimnazjon-2.33.mp3',
          itemTwo: 'audio/gimnazjon-2.33.ogg',
          caption: ''
        }
      ],
      media: [
      ],
      desc: '<p>Myślę, że więcej o Zeusie dowiesz się w świątyni. Udaj się na wzgórze, na Akropol.</p>',
      content: [
        {
          id: 2.3,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 2.34
    ,{
      id: 2.34,
      audio: [
        {
          itemOne: 'audio/gimnazjon-2.34.mp3',
          itemTwo: 'audio/gimnazjon-2.34.ogg',
          caption: ''
        }
      ],
      media: [
      ],
      desc: '<p>Chcesz posłuchać o pięcioboju czy o pozostałych dyscyplinach?</p>',
      content: [
        {
          id: 2.11,
          option: 'Opowiedz o pięcioboju.'
        }
        ,{
          id: 2.12,
          option: 'Opowiedz o pozostałych dyscyplinach sportu.'
        }
        ,{
          id: 2.3,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 2.35
    ,{
      id: 2.35,
      audio: [
        {
          itemOne: 'audio/gimnazjon-2.35.mp3',
          itemTwo: 'audio/gimnazjon-2.35.ogg',
          caption: ''
        }
      ],
      media: [
      ],
      desc: '<p>W igrzyskach może zwyciężyć przede wszystkim mężczyzna uczciwy, który swą prawość poświadczy przysięgą. Poza tym należy bardzo solidnie trenować - wtedy jest szansa na chwałę i zaszczyty na miarę Milona z Krotonu.</p>',
      content: [
        {
          id: 2.351,
          option: 'Milon z Krotonu?'
        }
        ,{
          id: 2.3,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 2.351
    ,{
      id: 2.351,
      audio: [
        {
          itemOne: 'audio/gimnazjon-2.351.mp3',
          itemTwo: 'audio/gimnazjon-2.351.ogg',
          caption: ''
        }
      ],
      media: [
      ],
      desc: '<p>Pięciokrotny zwycięzca igrzysk. Prawdziwy mistrz.</p>',
      content: [
        {
          id: 2.3,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 2.4
    ,{
      id: 2.4,
      audio: [
        {
          itemOne: 'audio/gimnazjon-2.4.mp3',
          itemTwo: 'audio/gimnazjon-2.4.ogg',
          caption: ''
        }
      ],
      media: [
      ],
      desc: '<p>Wieniec laurowy? Robimy go z liści lauru. Jest symboliczną nagrodą, którą honorujemy triumfatorów igrzysk. Oznacza zwycięstwo w równej, uczciwej walce.</p>',
      content: [
        {
          id: 2,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
  ]

  $scope.optionGimnazjon = {
    name: 0
  }

  $scope.galleryGimnazjonIndex = 1;

  $scope.setState = function() {

    $scope.stateGimnazjon = $scope.optionGimnazjon.name;
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