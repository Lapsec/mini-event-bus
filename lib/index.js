(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, (global.index = global.index || {}, global.index.js = factory()));
}(this, function () { 'use strict';

  var EventBus = /** @class */ (function () {
      function EventBus() {
      }
      EventBus.prototype.dispatch = function (eventName, payload) { };
      EventBus.prototype.addEventListener = function (eventName, callback) { };
      EventBus.prototype.removeEventListener = function (eventName) { };
      EventBus.prototype.once = function (eventName, payload) { };
      return EventBus;
  }());

  return EventBus;

}));
