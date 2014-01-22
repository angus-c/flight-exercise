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
      this.$node.addClass(this.attr.onClass);
      this.trigger('buttonOn');
    };

    this.turnOff = function() {
      this.$node.removeClass(this.attr.onClass);
      this.trigger('buttonOff');
    };

    this.toggle = function() {
      if (this.$node.hasClass(this.attr.onClass)) {
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
