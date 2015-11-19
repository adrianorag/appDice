angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
})

.controller('PlaylistsCtrl', function($scope) {
  /*
  var permanentStorage = window.localStorage;
  var tempStorage = window.sessionStorage;
  http://docs.phonegap.com/en/3.0.0/cordova_storage_storage.md.html#localStorage
  http://learn.ionicframework.com/formulas/localstorage/

    window.localStorage.setItem("listPlaylist",{});
    window.localStorage.setItem("contador",{});
  */
  var listPlaylist = window.localStorage.getItem("listPlaylist");
  var contador = window.localStorage.getItem("contador");

  contador = contador == "null" ? 1 : parseInt(contador);
  listPlaylist = listPlaylist == null ? [] : JSON.parse(listPlaylist);
  contador += 1;
  listPlaylist.push( {title: 'Cowbell'+contador, id: contador });

  window.localStorage.setItem("listPlaylist",JSON.stringify(listPlaylist));
  window.localStorage.setItem("contador",contador);

  $scope.playlists = listPlaylist;
})

.controller('CreateRollCtrl', function($scope, $stateParams){
  if($scope.customRoll == undefined){
    var customRoll = window.localStorage.getItem("customRoll");
    $scope.logRollDice =  customRoll == null ? [] : JSON.parse(customRoll);
  }

  $scope.roll = {titleRoll:"", plusRoll:0, diceList:[]};
  $scope.addDice = function(rollCunstom) {

    console.log(roll);

    $scope.createRoll.push(dice);

  }

  $scope.saveRoll = function(rollCunstom) {
    console.log(rollCunstom);
  }


})

.controller('QuickDiceCtrl', function($scope, $stateParams) {

  if($scope.logRollDice == undefined){
    var logRollDice = window.localStorage.getItem("logRollDice");
    logRollDice = logRollDice == null ? [] : JSON.parse(logRollDice);
    $scope.logRollDice = logRollDice;
  }

  $scope.rollDice = function(dice) {
    var rollValueDice = Math.floor(Math.random() * dice) + 1;
    var logDice = {
      rollValueDice :rollValueDice,
      dateLog : new Date(),
      dateUTC: new Date().getTime(),
      title : '1D'+dice
    };
    $scope.logRollDice.push(logDice);
    window.localStorage.setItem("logRollDice",JSON.stringify($scope.logRollDice))
  }

  $scope.clearLogRoll = function() {
    $scope.logRollDice= [];
    window.localStorage.setItem("logRollDice",JSON.stringify($scope.logRollDice))
  }
})

;
/*
angular.module('ionic.utils', [])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}]);*/
