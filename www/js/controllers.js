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

  $scope.$on('$ionicView.enter', function () {
    if (MyState.get('beingAddingService') === true && MyState.get('from') === 'MAKE') {
    }
  });

  $scope.$on('$ionicNavView.leave', function () {
    MyState.set('from', 'STORE');
    MyState.set('card', _.cloneDeep(MyState.bricks[$scope.current_card_index]));
    if ($scope.current_card_index + 1 <= MyState.bricks.length-1) {
      $scope.current_card_index += 1;
    }
  });

  $scope.grids = MyState.bricks;

  $scope.systemGrids = _.filter($scope.grids, (grid) => {return grid.custom === false});

  // console.log($scope.systemGrids);

  $scope.customGrids = _.filter($scope.grids, (grid) => {return grid.custom === true});


  $scope.getRowNumberOfCustomGrids = function () {
    return _.range(Math.floor($scope.customGrids.length / 2));
  };

  $scope.getGridsOfCurrentRow = function (i) {
    return _.slice($scope.grids, 2*i, 2*i + 2);
  };




}])
   
.controller('page5Ctrl', ['$scope', '$stateParams', '$rootScope', 'MyState', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $rootScope, MyState) {
  $scope.cards = [];


  $scope.$on('$ionicView.enter', function () {
    // console.log(JSON.stringify(MyState.get('card')));
    if (MyState.get('beingAddingService') === true && MyState.get('from') === 'STORE') {
      $scope.cards.push(MyState.get('card'));
      MyState.set('beingAddingService', false);
    }
  });

  $scope.$on('$ionicNavView.leave', function () {
    MyState.set('from', 'MAKE');
  });


  $scope.addService = function () {
    MyState.set('to', 'STORE');
    MyState.set('beingAddingService', true);
  };

  $scope.run_service = function () {
    //TODO: it's just a test, please re-implement it
    MyState.bricks[0].run().then(function (places) {
      $scope.testSoapResult = _.map(places, (p) => {return p.name;});

    });
  };

  //TODO: just test weather, should be delete
  $scope.run_service = MyState.weather;

}])
 