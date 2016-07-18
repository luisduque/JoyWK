// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var myApp = angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'ui.router'])

myApp.run(function($ionicPlatform, $rootScope, AccountService) {
  
  AccountService.currentUser()
    .then(function(user) {
      $rootScope.user = user;
    })

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  
})

.constant("socialProvider", "facebook")

.constant('$ionicLoadingConfig', {
  template: "<ion-spinner></ion-spinner>",
  hideOnStateChange : true
})

myApp.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  
});







