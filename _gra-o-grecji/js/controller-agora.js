App.controller('agoraController', function($scope, ngAudio, $timeout) {

  $scope.stateAgora = 0;

  $scope.dataAgora = [
    // 0
    {
      id: 0,
      audio: [
        {
          itemOne: 'audio/agora-0.mp3',
          itemTwo: 'audio/agora-0-1.ogg',
          caption: 'Antygona'
        }
      ],
      media: [],
      desc: '<p>Wkraczasz na rozległy plac, rozciągający się u stóp wzgórza Agora. Plac otaczają liczne okazałe budowle - świątynie i urzędy. Znajdujesz się na Agorze - głównym rynku w Atenach. Iluż tu ludzi! Mieszkańcy załatwiają tutaj swoje rozmaite sprawy. Twoją uwagę przyciąga brodaty mężczyzna w wysokim hełmie. To przywódca Aten - <strong>Perykles</strong>. Właśnie tłumaczy jakiemuś cudzoziemcowi, że demokracja to najlepszy sposób rządzenia państwem. Peryklesowi towarzyszy grupka uzbrojonych po zęby żołnierzy, zwanych <strong>hoplitami</strong>.</p>',
      content: [
        {
          id: 1,
          option: 'Rozmawiam z jednym z przechodniów.'
        }
        ,{
          id: 2,
          option: 'Słucham Peryklesa.'
        }
        ,{
          id: 3,
          option: 'Przypatruję się hoplitom.'
        }
      ]
    }
    // 1
    ,{
      id: 1,
      audio: [
        {
          itemOne: 'audio/agora-1.mp3',
          itemTwo: 'audio/agora-1-1.ogg',
          caption: 'Antygona'
        }
      ],
      media: [
        {
          item: '<img src="images/Agora-1.svg" alt="">',
          caption: ''
        }
      ],
      desc: '<p>Witaj! Wydaje mi się, że nigdy wcześniej nie widziałem cię w Atenach. Z twego dziwnego odzienia i akcentu wnoszę, że przybywasz z dalekich stron. Czy mogę coś dla ciebie zrobić?</p>',
      content: [
        {
          id: 1.1,
          option: 'Opowiedz o demokracji. Co to takiego?'
        }
        ,{
          id: 1.2,
          option: 'Opowiedz o sobie. Kim jesteś?'
        }
        ,{
          id: 1.3,
          option: 'Opowiedz o Peryklesie. Kto to taki?'
        }
        ,{
          id: 0,
          option: 'Ruszam w dalszą drogę. Bywaj!'
        }
      ]
    }
    // 1.1
    ,{
      id: 1.1,
      audio: [
        {
          itemOne: 'audio/agora-1.1.mp3',
          itemTwo: 'audio/agora-1.1.ogg',
          caption: 'Antygona'
        }
      ],
      media: [

      ],
      desc: '<p>Demokracja to „władza ludu”. Tak rządzi się w Atenach.</p>',
      content: [
        {
          id: 1.11,
          option: 'W jaki sposób lud może rządzić?'
        }
        ,{
          id: 1,
          option: 'Ach tak. Chcę teraz zapytać o coś innego.'
        }
      ]
    }
    // 1.2
    ,{
      id: 1.2,
      audio: [
        {
          itemOne: 'audio/agora-1.2.mp3',
          itemTwo: 'audio/agora-1.2.ogg',
          caption: 'Antygona'
        }
      ],
      media: [],
      desc: '<p>Moje imię niewiele ci powie, ale z dumą mogę powiedzieć, że jestem obywatelem ateńskim.</p>',
      content: [
        {
          id: 1.21,
          option: 'Co to znaczy, że jesteś obywatelem?'
        }
        ,{
          id: 1,
          option: 'Ach tak. Chcę teraz zapytać o coś innego.'
        }
      ]
    }
    // 1.21
    ,{
      id: 1.21,
      audio: [
        {
          itemOne: 'audio/agora-1.21.mp3',
          itemTwo: 'audio/agora-1.21.ogg',
          caption: 'Antygona'
        }
      ],
      media: [],
      desc: '<p>To znaczy, że mam pełnię praw. Mogę decydować o sprawach państwowych. Mogę przemawiać na zebraniach Zgromadzenia Ludowego, brać udział w głosowaniu, a także zostać urzędnikiem.</p>',
      content: [
        {
          id: 1.211,
          option: 'Czy wszyscy mieszkańcy Aten są obywatelami?'
        }
        ,{
          id: 1,
          option: 'Ach tak. Opowiedz o czymś innym.'
        }
      ]
    }
    // 1.211
    ,{
      id: 1.211,
      audio: [
        {
          itemOne: 'audio/agora-1.211.mp3',
          itemTwo: 'audio/agora-1.211.ogg',
          caption: 'Antygona'
        }
      ],
      media: [],
      desc: '<p>A skąd! To nie takie proste. Obywatelem jest jedynie osoba będąca wolnym człowiekiem, dorosłym mężczyzną i rodowitym Ateńczykiem, mającym ojca Ateńczyka i matkę Atenkę. Praw politycznych nie posiadają zatem kobiety, cudzoziemcy i niewolnicy. To jedna z głównych zasad naszej demokracji.</p>',
      content: [
        {
          id: 1.1,
          option: 'Ciekawe. Opowiedz o tej waszej demokracji.'
        }
        ,{
          id: 1,
          option: 'Ach tak. Opowiedz o czymś innym.'
        }
      ]
    }
    // 1.3
    ,{
      id: 1.3,
      audio: [
        {
          itemOne: 'audio/agora-1.3.mp3',
          itemTwo: 'audio/agora-1.3.ogg',
          caption: 'Antygona'
        }
      ],
      media: [],
      desc: '<p>Perykles jest naszym przywódcą.</p>',
      content: [
        {
          id: 1.31,
          option: 'Przywódcą? Czyli królem?'
        }
        ,{
          id: 1,
          option: 'Ach tak. Chcę teraz zapytać o coś innego.'
        }
      ]
    }
    // 1.31
    ,{
      id: 1.31,
      audio: [
        {
          itemOne: 'audio/agora-1.31.mp3',
          itemTwo: 'audio/agora-1.31.ogg',
          caption: 'Antygona'
        }
      ],
      media: [],
      desc: '<p>Nie, nie. Ateny już od dawna nie mają króla. Przecież nasz ustrój to demokracja, a nie monarchia! Perykles jest urzędnikiem, a konkretniej - strategiem.</p>',
      content: [
        {
          id: 1.1,
          option: 'Demokracja? A co to znaczy?'
        }
        ,{
          id: 1.311,
          option: 'Kim jest strateg?'
        }
        ,{
          id: 1.112,
          option: 'A gdyby ktoś chciał zostać królem? Co wtedy?'
        }
        ,{
          id: 1,
          option: 'Ach tak. Chcę teraz zapytać o coś innego.'
        }
      ]
    }
    // 1.311
    ,{
      id: 1.311,
      audio: [
        {
          itemOne: 'audio/agora-1.311.mp3',
          itemTwo: 'audio/agora-1.311.ogg',
          caption: 'Antygona'
        }
      ],
      media: [],
      desc: '<p>Głównym zadaniem strategów jest dowodzenie armią, ale mają oni też wiele innych poważnych obowiązków. O ile zwykli urzędnicy są powoływani w wyniku procedury losowania, to strategów obieramy przez głosowanie. Perykles to zacny i prawy obywatel, no i trzeba przyznać, że ma łeb na karku. Dlatego wybieramy go na stratega już od ładnych paru lat!</p>',
      content: [
        {
          id: 1,
          option: 'Ach tak. Chcę teraz zapytać o coś innego.'
        }
      ]
    }
    // 1.11
    ,{
      id: 1.11,
      audio: [
        {
          itemOne: 'audio/agora-1.11.mp3',
          itemTwo: 'audio/agora-1.11.ogg',
          caption: 'Antygona'
        }
      ],
      media: [],
      desc: '<p>Obywatele regularnie zbierają się na obradach Zgromadzenia Ludowego. Każdy może zabrać głos i zaproponować wprowadzenie nowego prawa. Potem omawiamy wszystkie pomysły. Na koniec następuje głosowanie. Odbywa się ono przez podniesienie rąk albo wrzucenie kamyków do urny. Wygrywa ten pomysł, który uzyskał największe poparcie obywateli. Każdy głos jest tak samo ważny. Wszyscy obywatele są równi wobec prawa. Jesteśmy bardzo dumni z naszego ustroju.</p>',
      content: [

        {
          id: 1.211,
          option: 'Kim jest obywatel? Czy wszyscy mieszkańcy Aten są obywatelami?'
        }
        ,{
          id: 1.112,
          option: 'A gdyby ktoś chciał zmienić wasz ustrój i - na przykład - zostać królem?'
        }
        ,{
          id: 1,
          option: 'Dziękuję za wyjaśnienia. Opowiedz teraz o czymś innym.'
        }
      ]
    }
    // 1.112
    ,{
      id: 1.112,
      audio: [
      ],
      media: [],
      desc: '<p>A od czego mamy ostracyzm? Raz do roku piszemy na specjalnych glinianych skorupkach - ostrakonach - imię polityka, który naszym zdaniem zagraża demokracji. Ten, którego wskaże najwięcej obywateli, musi na 10 lat opuścić Ateny.</p>',
      content: [
        {
          id: 1,
          option: 'Ciekawe. Opowiedz teraz o czymś innym.'
        }
      ]
    }
    // 2
    ,{
      id: 2,
      audio: [
      ],
      media: [
        {
          item: '<img src="images/Agora-2.svg" alt="">',
          caption: 'Perykles'
        }
      ],
      desc: '<blockquote class="blockquote"><p>Nasz ustrój polityczny nie jest naśladownictwem obcych praw, a my sami raczej jesteśmy wzorem dla innych niż inni dla nas. Nazywa się ten ustrój demokracją, ponieważ opiera się na większości obywateli, a nie na mniejszości. W sporach prywatnych każdy obywatel jest równy w obliczu prawa; jeśli zaś chodzi o znaczenie, to jednostkę ceni się nie ze względu na jej przynależność do pewnej grupy, lecz ze względu na talent osobisty, jakim się wyróżnia; nikomu też, kto jest zdolny służyć ojczyźnie, ubóstwo albo nieznane pochodzenie nie przeszkadza w osiągnięciu zaszczytów. W naszym życiu państwowym kierujemy się zasadą wolności</p><p class="ref">Tukidydes, <em>Wojna peloponeska</em></p></blockquote>',
      content: [
      ]
    }
    // 3
    ,{
      id: 3,
      audio: [
      ],
      media: [
        {
          item: '<img src="images/Agora-3.svg" alt="">',
          caption: 'Hoplita 1'
        }
        ,{
          item: '<img src="images/Agora-31.jpg" alt="">',
          caption: 'Hoplita 2'
        }
        ,{
          item: '<img src="images/Agora-32.jpg" alt="">',
          caption: 'Hoplita 3'
        }
        ,{
          item: '<img src="images/Agora-33.jpg" alt="">',
          caption: 'Hoplita 4'
        }
      ],
      desc: '',
      content: [
      ]
    }
  ]

  $scope.optionAgora = {
    name: 0
  }

  $scope.galleryAgoraIndex = 1;

  // $scope.galleryAgoraUp = function() {

  //   if() {}
  // }

  $scope.setState = function() {

    $scope.stateAgora = $scope.optionAgora.name;
  }

  $scope.back = false;

  $scope.backTimeout = function() {

    setTimeout(function () {
      $scope.$apply(function () {
          $scope.back = false;
      });
    }, 1000);
  }
});