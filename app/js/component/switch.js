define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(Switch);

  /**
   * Module function
   */

  function Switch() {
    this.defaultAttrs({

    });

    this.turnOn = function() {
      this.$node.addClass('on');
      this.trigger('buttonOn');
    };

    this.turnOff = function() {
      this.$node.removeClass('on');
      this.trigger('buttonOff');
    };

    this.toggle = function() {
      if (this.$node.hasClass('on')) {
        this.turnOff();
      } else {
        this.turnOn();
      }
    }

    this.after('initialize', function () {
      this.on('click', this.toggle);
      this.on(document, 'requestOn', this.turnOn);
      this.on(document, 'requestOff', this.turnOff);
    });
  }

});
