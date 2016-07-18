angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('inicioSesion', {
    url: '/page2',
    templateUrl: 'templates/inicioSesion.html',
    controller: "AccountController",
    controllerAs : "account"
  })

  .state('registro', {
    url: '/page3',
    templateUrl: 'templates/registro.html',
    controller: "AccountController",
    controllerAs : "account"
  })

  .state('inicio', {
    url: '/page4',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('perfil', {
    url: '/page15',
    templateUrl: 'templates/perfil.html',
    controller: 'perfilCtrl'
  })

  .state('restaurantes', {
    url: '/page5',
    templateUrl: 'templates/restaurantes.html',
    controller: 'restaurantesCtrl'
  })

  .state('menuRest', {
    url: '/page12',
    templateUrl: 'templates/menuRest.html',
    controller: 'menuRestCtrl'
  })

  .state('menuBar', {
    url: '/page16',
    templateUrl: 'templates/menuBar.html',
    controller: 'menuBarCtrl'
  })

  .state('bar', {
    url: '/page8',
    templateUrl: 'templates/bar.html',
    controller: 'barCtrl'
  })

  .state('eventos', {
    url: '/page9',
    templateUrl: 'templates/eventos.html',
    controller: 'eventosCtrl'
  })

  .state('reservaRes', {
    url: '/page6',
    templateUrl: 'templates/reservaRes.html',
    controller: 'reservaResCtrl'
  })

  .state('reservaRes_conAlimentos', {
    url: '/page13',
    templateUrl: 'templates/reservaRes_conAlimentos.html',
    controller: 'reservaRes_conAlimentosCtrl'
  })

  .state('reservaBar', {
    url: '/page10',
    templateUrl: 'templates/reservaBar.html',
    controller: 'reservaBarCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});