define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(switcher);

  /**
   * Module function
   */

  function switcher() {
    this.defaultAttrs({
      onClass: 'btn-primary'
    });

    this.turnOn = function() {
      // 1) add class `this.attr.onClass`
      // 2) trigger 'buttonOn' event
    };

    this.turnOff = function() {
      // 3) remove class `this.attr.onClass`
      // 4) trigger 'buttonOff' event
    };

    this.toggle = function() {
      // 5) if `this.attr.onClass` is present call `turnOff` otherwise call `turnOn`
    }

    this.after('initialize', function () {
      // 6) listen for 'click' event and call `this.toggle`
    });
  }

});
