App.controller('teatrController', ['$scope', function($scope) {

  $scope.stateTeatr = 0;

  $scope.dataTeatr = [
    // 0
    {
      id: 0,
      audio: [
        {
          itemOne: 'audio/teatr-0.mp3',
          itemTwo: 'audio/teatr-0.ogg',
          caption: 'Antygona'
        }
      ],
      media: [],
      desc: '<p>Znajdujesz się wysoko na zboczu rozległego wzgórza. Spoglądając w dół, możesz podziwiać jedno z wielkich osiągnięć kulturalnych Greków - teatr. Na samym dole znajduje się okrągła scena, na której występuje kilkuosobowy chór. Na podwyższeniu, za chórem, trzech aktorów odgrywa role kluczowe dla całego przedstawienia. Scenę półkoliście otacza widownia wznoszącą się schodkowo w górę zbocza. W tej chwili znajduje się na niej prawdziwy tłum ludzi, żywiołowo reagujących na występy artystów.</p>',
      content: [
        {
          id: 1,
          option: 'Przyglądam się uważniej występom artystów.'
        }
        ,{
          id: 2,
          option: 'Przyglądam się dokładnie budowli.'
        }
        ,{
          id: 3,
          option: 'Zajmuję miejsce na widowni.'
        }
      ]
    }
    // 1
    ,{
      id: 1,
      audio: [
        // {
        //   itemOne: 'audio/teatr-1.mp3',
        //   itemTwo: 'audio/teatr-1.ogg',
        //   caption: 'Antygona'
        // }
      ],
      media: [
        {
          item: '<img src="images/Teatr-1.svg" alt="">',
          caption: 'Antygona'
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
        // {
        //   itemOne: 'audio/teatr-2.mp3',
        //   itemTwo: 'audio/teatr-2.ogg',
        //   caption: 'Antygona'
        // }
      ],
      media: [
        {
          item: '<img src="images/Teatr-2.svg" alt="">',
          caption: 'Teatr'
        }
      ],
      desc: '',
      content: [
      ]
    }
    // 3
    ,{
      id: 3,
      audio: [
        {
          itemOne: 'audio/teatr-3.mp3',
          itemTwo: 'audio/teatr-3.ogg',
          caption: 'Antygona'
        }
      ],
      media: [
        {
          item: '<img src="images/Teatr-3.svg" alt="">',
          caption: 'Teatr'
        }
      ],
      desc: '<p>Siadaj nieznajomy, zasłaniasz cały widok! – młody Ateńczyk zwraca ci uwagę i wskazuje miejsce obok siebie. – Wyglądasz, jakbyś był pierwszy raz w teatrze. Jesteś spoza miasta? Tak czy inaczej, dobrze trafiłeś. Można tu dziś podziwiać dzieła twórców, którzy cieszą się ogromną łaską Apollina. Na występy przybywają najznamienitsi Ateńczycy, stratedzy, urzędnicy. Wydaje mi się, że widziałem nawet kilku filozofów.</p>',
      content: [
        {
          id: 3.1,
          option: 'Opowiedz o tym miejscu.'
        }
        ,{
          id: 3.2,
          option: 'Opowiedz o twórcach.'
        }
        ,{
          id: 3.3,
          option: 'Opowiedz o Apollinie'
        }
        ,{
          id: 3.4,
          option: 'Opowiedz o strategach i urzędnikach.'
        }
        ,{
          id: 3.5,
          option: 'Opowiedz o filozofach.'
        }
        ,{
          id: 0,
          option: 'Do zobaczenia.'
        }
      ]
    }
    // 3.1
    ,{
      id: 3.1,
      audio: [
        {
          itemOne: 'audio/teatr-3.1.mp3',
          itemTwo: 'audio/teatr-3.1gg',
          caption: 'Antygona'
        }
      ],
      media: [
        {
          item: '<img src="images/Teatr-3.1.svg" alt="">',
          caption: 'Teatr'
        }
      ],
      desc: '<p>Znajdujemy się w teatrze. Siedzimy teraz na widowni, ale najważniejsze jest oczywiście to miejsce na dole, gdzie występują artyści. Odgrywają oni role przygotowane specjalnie przez uzdolnionych twórców. Prezentowane historie bardzo często dotyczą wydarzeń z przeszłości naszego ludu. Teatr to świetna rozrywka i jednocześnie nasz helleński wynalazek.</p>',
      content: [
        {
          id: 3.11,
          option: 'Helleński wynalazek?'
        }
        ,{
          id: 3.12,
          option: 'Opowiedz o artystach.'
        }
        ,{
          id: 3.13,
          option: 'Opowiedz o odgrywanej właśnie scenie.'
        }
        ,{
          id: 3,
          option: 'Opowiedz teraz o czymś innym.'
        }
      ]
    }
    // 3.11
    ,{
      id: 3.11,
      audio: [
        {
          itemOne: 'audio/teatr-3.11.mp3',
          itemTwo: 'audio/teatr-3.11g',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>Bogowie sprzyjają naszemu ludowi, raz po raz obdarzając nas nie tylko silnymi wojownikami, ale także mędrcami i artystami. Nasz lud jako pierwszy zaczął budować teatry i wystawiać sztuki. Zwyczaj ten pochodzi od tradycyjnych obchodów religijnych ku czci boga Dionizosa.</p>',
      content: [
        {
          id: 3.111,
          option: 'Opowiedz o Dionizosie.'
        }
      ]
    }
    // 3.111
    ,{
      id: 3.111,
      audio: [
        {
          itemOne: 'audio/teatr-3.111.mp3',
          itemTwo: 'audio/teatr-3.111',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>Dionizos to bóg kwitnącej dziko natury oraz winnej latorośli i wina.</p>',
      content: [
        {
          id: 3.1,
          option: 'Opowiedz teraz o czymś innym.'
        }
      ]
    }
    // 3.12
    ,{
      id: 3.12,
      audio: [
        {
          itemOne: 'audio/teatr-3.12.mp3',
          itemTwo: 'audio/teatr-3.12g',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>Mam na myśli oczywiście aktorów i chór. Aktorami mogą być wyłącznie mężczyźni. Nigdy nie występuje ich więcej niż trzech. Zapewne widzisz, że na twarzach mają maski. Mogą być smutne, roześmiane, przestraszone albo zagniewane. Aktorzy używają ich, aby widzowie łatwiej mogli się zorientować, kim jest odgrywana postać oraz jaki nastrój jej towarzyszy.</p>',
      content: [
        {
          id: 3.1,
          option: 'Opowiedz teraz o czymś innym.'
        }
      ]
    }
    // 3.13
    ,{
      id: 3.13,
      audio: [
        {
          itemOne: 'audio/teatr-3.13.mp3',
          itemTwo: 'audio/teatr-3.13g',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>To fragment Antygony - jednej z najbardziej znanych tragedii Sofoklesa.</p>',
      content: [
        {
          id: 3.131,
          option: 'Kim jest Sofokles?'
        }
        ,{
          id: 3.132,
          option: 'Tragedia - co to takiego?'
        }
      ]
    }
    // 3.131
    ,{
      id: 3.131,
      audio: [
        {
          itemOne: 'audio/teatr-3.131.mp3',
          itemTwo: 'audio/teatr-3.131',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>To jeden z największych twórców tragedii.</p>',
      content: [
        {
          id: 3.1,
          option: 'Opowiedz teraz o czymś innym.'
        }
      ]
    }
    // 3.132
    ,{
      id: 3.132,
      audio: [
        {
          itemOne: 'audio/teatr-3.132.mp3',
          itemTwo: 'audio/teatr-3.132',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>To spisany utwór, który aktorzy odgrywają na scenie. Opowiada o postaciach zmagających się z nieprzychylnym losem. Nazywamy go tragedią, ponieważ bohaterowie stają przed wyborami, z których żaden nie jest dobry – wszystkie prowadzą do klęski.</p>',
      content: [
        {
          id: 3.1,
          option: 'Opowiedz teraz o czymś innym.'
        }
      ]
    }
    // 3.2
    ,{
      id: 3.2,
      audio: [
        {
          itemOne: 'audio/teatr-3.2.mp3',
          itemTwo: 'audio/teatr-3.2gg',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>Wielu helleńskich twórców zasługuje na uznanie. Spod piór Ajschylosa, Eurypidesa czy Sofoklesa wyszły tragedie poruszające duszę każdego. Właśnie teraz na scenie można podziwiać sztukę napisaną przez ostatniego z wymienionych.</p>',
      content: [
        {
          id: 3.21,
          option: 'Ajschylos, Eurypides, Sofokles?'
        }
        ,{
          id: 3.22,
          option: 'Tragedia - co to takiego?'
        }
        ,{
          id: 3,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 3.21
    ,{
      id: 3.21,
      audio: [
        {
          itemOne: 'audio/teatr-3.21.mp3',
          itemTwo: 'audio/teatr-3.21g',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>To imiona największych spośród twórców tragedii.</p>',
      content: [
        {
          id: 3.2,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 3.22
    ,{
      id: 3.22,
      audio: [
        {
          itemOne: 'audio/teatr-3.22.mp3',
          itemTwo: 'audio/teatr-3.22g',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>To spisany utwór, który aktorzy odgrywają na scenie. Opowiada o postaciach zmagających się z nieprzychylnym losem. Nazywamy go tragedią, ponieważ bohaterowie stają przed wyborami, z których żaden nie jest dobry – wszystkie prowadzą do klęski.</p>',
      content: [
        {
          id: 3.2,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 3.3
    ,{
      id: 3.3,
      audio: [
        {
          itemOne: 'audio/teatr-3.3.mp3',
          itemTwo: 'audio/teatr-3.3gg',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>Apollo to bóg poetów. Powinieneś obejrzeć jego posąg w świątyni na Akropolu.</p>',
      content: [
        {
          id: 3.2,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 3.4
    ,{
      id: 3.4,
      audio: [
        {
          itemOne: 'audio/teatr-3.4.mp3',
          itemTwo: 'audio/teatr-3.4gg',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>Najlepiej odwiedź Agorę u stóp Akropolu. Myślę, że tam dowiesz się więcej.</p>',
      content: [
        {
          id: 3,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 3.5
    ,{
      id: 3.5,
      audio: [
        {
          itemOne: 'audio/teatr-3.5.mp3',
          itemTwo: 'audio/teatr-3.5gg',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>Filozofia to inaczej „umiłowanie mądrości”. Niektórzy spośród naszego ludu to prawdziwi mędrcy. Poprzez własne przemyślenia i rozmowy z innymi próbują dociec odpowiedzi na różne trudne pytania. Na przykład - jak zbudowany jest świat i materia? Skąd pochodzi życie? Czym jest prawda?</p>',
      content: [
        {
          id: 3.51,
          option: 'Opowiedz o mędrcach.'
        }
        ,{
          id: 3,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 3.51
    ,{
      id: 3.51,
      audio: [
        {
          itemOne: 'audio/teatr-3.51.mp3',
          itemTwo: 'audio/teatr-3.51g',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>Chcesz posłuchać o Talesie, Heraklicie czy Sokratesie?</p>',
      content: [
        {
          id: 3.511,
          option: 'Opowiedz o Talesie.'
        }
        ,{
          id: 3.512,
          option: 'Opowiedz o Heraklicie.'
        }
        ,{
          id: 3.513,
          option: 'Opowiedz o Sokratesie.'
        }
      ]
    }
    // 3.511
    ,{
      id: 3.511,
      audio: [
        {
          itemOne: 'audio/teatr-3.511.mp3',
          itemTwo: 'audio/teatr-3.511',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>Uważa się, że to właśnie Tales z Miletu był pierwszym filozofem. Z pewnością był wielkim uczonym i zdolnym matematykiem. Według niego początkiem wszystkiego jest woda.</p>',
      content: [
        {
          id: 3.5,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 3.512
    ,{
      id: 3.512,
      audio: [
        {
          itemOne: 'audio/teatr-3.512.mp3',
          itemTwo: 'audio/teatr-3.512',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>Heraklit z Efezu zauważył, że wszystko na świecie zmienia się wraz z upływem czasu. Dlatego, jak powiedział, nie można dwa razy wejść do tej samej rzeki.</p>',
      content: [
        {
          id: 3.5,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
    // 3.53
    ,{
      id: 3.513,
      audio: [
        {
          itemOne: 'audio/teatr-3.513.mp3',
          itemTwo: 'audio/teatr-3.513',
          caption: 'Antygona'
        }
      ],
      media: [
      ],
      desc: '<p>Sokrates to wielki mędrzec, który pochodzi z Aten. Możliwe, że gdzieś go tutaj spotkasz. Nie rozgłasza swoich poglądów w żadnej szkole, lecz bardzo często udaje prostaczka i rozmawia z ludźmi na ulicach. Twierdzi, że dzięki temu może nauczyć się czegoś od innych lub też sprawić, że jego rozmówcy doświadczą własnej niewiedzy i tym sposobem staną się mądrzejsi.</p>',
      content: [
        {
          id: 3.5,
          option: 'Chcę zapytać o coś innego.'
        }
      ]
    }
  ]

  $scope.optionTeatr = {
    name: 0
  }

  $scope.galleryTeatrIndex = 1;

  $scope.setState = function() {

    $scope.stateTeatr = $scope.optionTeatr.name;
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