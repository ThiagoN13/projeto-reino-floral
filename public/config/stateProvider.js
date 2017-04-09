angular.module('app')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('index', {
        url: '/',
        views: {
          '': {
            templateUrl: '../partials/home.html',
            controller: ''
          }
        }
      })
      .state('relatorios', {
        url: '/relatorios',
        views: {
          '': {
            templateUrl: '../partials/relatorios/tabelaDeRelatorios.html',
            controller: 'listaDeRelatorios'
          }
        }
      })
      .state('enviar', {
        url: '/enviar',
        views: {
          '': {
            templateUrl: '../partials/relatorios/enviar-relatorio.html',
            controller: 'listaDeRelatorios'
          }
        }
      })
      .state('especialidades', {
        url: '/especialidades',
        views: {
          '': {
            templateUrl: '../partials/especialidades/tabelaDeEspecialidadades.html',
            controller: 'listaDeEspecialidades'
          }
        }
      })
      .state('quizcdrf', {
        url: '/quizcdrf',
        views: {
          '': {
            templateUrl: '../partials/quiz/tabelaDePerguntas.html',
            controller: ''
          }
        }
      })
      .state('viewquiz', {
        url: '/viewquiz/:indice',
        views: {
          '': {
            templateUrl: '../partials/quiz/quiz.html',
            controller: 'formPerguntas'
          }
        }
      })
      .state('quizform', {
        url: '/quiz/form/',
        views: {
          '': {
            templateUrl: '../partials/quiz/formQuiz.html',
            controller: ''
          }
        }
      })
      .state('ranking', {
        url: '/ranking',
        views: {
          '': {
            templateUrl: '../partials/quiz/ranking.html',
            controller: ''
          }
        }
      })
      .state('cargos', {
        url: '/cargos',
        views: {
          '': {
            templateUrl: '../partials/cargos/tabelaDeCargos.html',
            controller: ''
          }
        }
      })
      .state('galeria', {
        url: '/galeria',
        views: {
          '': {
            templateUrl: '../partials/galeria.html',
            controller: ''
          }
        }
      });
  }]);
  
