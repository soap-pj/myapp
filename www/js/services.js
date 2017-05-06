"use strict"

angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])
.service('MyState', [function () {
    // this.beingAddingService = false;
    // this.from = '';
    // this.to = '';
    // this.card = null;

    this.get = function (key) {
      return this[key];
    };

    this.set = function(key, value) {
      this[key]= value;
    }

}]);