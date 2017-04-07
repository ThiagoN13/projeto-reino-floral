angular.module('app')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('relatorio', {
        url: '/relatorio',
        views: {
          '': {
            templateUrl: '../partials/relatorios/tabelaDeRelatorios.html',
            controller: ''
          }
        }
      })
      .state('relatorio.view', {
          url: '/view/:indice',
          views: {
            'modal@': {
              templateUrl: '../partials/relatorios/view-relatorio.html',
              controller: ''
            }
          }
        })
  }
