angular.module('app', ['ui.router', 'ngResource']);

angular.module('app')
  .run(['$rootScope', function($rootScope) {
    console.log('RUN rootScope');
  }]);