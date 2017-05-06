"use strict"

angular.module('app.components', [])
.component('myCard', {
  templateUrl: '../templates/my-card.html',
  bindings: {value: '<'},
  controller: function MyCardController () {
  }
})