"use strict";

angular.module('app.controllers', [])
  
.controller('page2Ctrl', ['$scope', '$stateParams', '$rootScope', 'MyState', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $rootScope, MyState) {
  $scope.services = MyState.myServices;




}])

.controller('page6Ctrl', ['$scope', '$stateParams', '$rootScope', 'MyState', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $rootScope, MyState) {
  $scope.current_card_index = 0;



  $scope.grids = MyState.bricks;

  $scope.systemGrids = _.filter($scope.grids, (grid) => {return grid.custom === false});


  $scope.customGrids = _.filter($scope.grids, (grid) => {return grid.custom === true});


  $scope.getRowNumberOfCustomGrids = function () {
    return _.range(Math.floor($scope.customGrids.length / 2));
  };

  $scope.getGridsOfCurrentRow = function (i) {
    return _.slice($scope.customGrids, 2*i, 2*i + 2);
  };



}])
   
.controller('page5Ctrl', ['$scope', '$stateParams', '$rootScope', 'MyState', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $rootScope, MyState, $state) {
  $scope.cards = MyState.cardsOfCreatingPage;




  $scope.addService = function () {
    MyState.set('from', 'MAKE');
    MyState.set('beingAddingService', true);
    $state.go('tabsController.page6');
  };

  $scope.run_service = function () {
    //TODO: it's just a test, please re-implement it
    MyState.bricks[0].run().then(function (places) {
      $scope.testSoapResult = _.map(places, (p) => {return p.name;});

    });
  };

  //TODO: just test weather, should be delete
  $scope.run_service = MyState.weather;


  $scope.save_service = function () {

  };
}])
 