'use strict'

angular.module('app.components', [])
.component('myCard', {
  templateUrl: 'templates/my-card.html',
  bindings: {value: '<'},
  controller: ['MyState', '$state', function MyCardController (MyState, $state) {
    let that = this;
    this.deleteSelf = function () {
      MyState.deleteCardOfCreatingPage(that.value.id);
    };
  }]
})
.component('myGrid', {
  templateUrl: 'templates/my-grid.html',
  bindings: {value: '<'},
  controller: ['MyState', '$state', function MyGridController (Mystate, $state) {

    let that = this;
    this.addToCardsOfCreatingPage = function () {
      if (Mystate.get('from') === 'MAKE' && Mystate.get('beingAddingService') === true) {
        let index = _.findIndex(Mystate.bricks, function (card) {
          return card.id === that.value.id
        });
        if (index !== -1) {
          Mystate.cardsOfCreatingPage.push(_.cloneDeep(Mystate.bricks[index]));
        }
        Mystate.set('from', 'STORE');
        Mystate.set('beingAddingService', false);
        $state.go('tabsController.page5');
      }
    };

  }]
})
.component('myService', {
  templateUrl: 'templates/my-service.html',
  bindings: {value: '<'},
  controller: ['MyState', '$ionicListDelegate',  function MyServiceController (MyState, $ionicListDelegate) {
    let that = this;
    this.deleteSelf = function () {
      MyState.deleteService(that.value.id);
      $ionicListDelegate.closeOptionButtons();
    };
  }]
})
