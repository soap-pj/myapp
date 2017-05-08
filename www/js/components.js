'use strict'

angular.module('app.components', [])
.component('myCard', {
  templateUrl: 'templates/my-card.html',
  bindings: {value: '<'},
  controller: function MyCardController () {
  }
})
.component('myGrid', {
  templateUrl: 'templates/my-grid.html',
  bindings: {value: '<'},
  controller: function MyGridController () {

  }
})
.component('myService', {
  templateUrl: 'templates/my-service.html',
  bindings: {value: '<'},
  controller: function MyServiceController () {

  }
})
