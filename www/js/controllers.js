angular.module('app.controllers', [])
  
.controller('inicioSesionCtrl', function($scope) {
	/*$scope.login = function(){
		//alert("Helloo");
		var ref = new Firebase("https://joywkbd.firebaseio.com/");
		var authObject = $firebaseAuth(ref);

		authObject.$authWithOAuthPopup('facebook').then(function(authData){
			console.log(authData);
		}).catch(function(error){

			console.log('Error' + error);

		})
		
	}*/

})

.controller('AccountController', ["AccountService", "$state", "$rootScope", "$ionicLoading", "$ionicPopup", "socialProvider", function(AccountService, $state, $rootScope, $ionicLoading, $ionicPopup, socialProvider) {

  var errorHandler = function(options) {
    var errorAlert = $ionicPopup.alert({
      title: options.title,
      okType : 'button-assertive',
      okText : "Try Again"
    });
  }

  var vm = this;

  vm.flogin = function() {
    Stamplay.User.socialLogin(socialProvider)
  }

  vm.logout = function() {
    $ionicLoading.show();
    var jwt = window.location.origin + "-jwt";
    window.localStorage.removeItem(jwt);
    AccountService.currentUser()
    .then(function(user) {
      $rootScope.user = user;
      $ionicLoading.hide();
    }, function(error) {
      console.error(error);
      $ionicLoading.hide();
    })
  }

  vm.login = function() {
    $ionicLoading.show();
    Stamplay.User.login(vm.user)
    .then(function(user) {
      $rootScope.user = user;
      $ionicLoading.hide();
      $state.go("inicioSesion");
    }, function(error) {
      $ionicLoading.hide();
      errorHandler({
        title : "<h4 class='center-align'>Incorrect Username or Password</h4>"
      })
    })
  }

  vm.signup = function() {

    Stamplay.User.signup(vm.user)
    .then(function(user) {
      $rootScope.user = user;
      $state.go("inicioSesion");
    }, function(error) {
      errorHandler({
        title : "<h4 class='center-align'>A Valid Email and Password is Required</h4>"
      })
      
    })
  }


}])
   
.controller('registroCtrl', function($scope) {

})
   
.controller('inicioCtrl', function($scope) {

})
   
.controller('perfilCtrl', function($scope) {

})
   
.controller('restaurantesCtrl', function($scope) {

})
   
.controller('menuRestCtrl', function($scope) {

})
   
.controller('menuBarCtrl', function($scope) {

})
   
.controller('barCtrl', function($scope) {

})
   
.controller('eventosCtrl', function($scope) {

})
   
.controller('reservaResCtrl', function($scope) {

})
   
.controller('reservaRes_conAlimentosCtrl', function($scope) {

})
   
.controller('reservaBarCtrl', function($scope) {

})
 