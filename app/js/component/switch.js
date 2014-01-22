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

    this.enable = function() {
      this.$node.addClass('enabled');
      this.trigger('enabled');
    };

    this.disable = function() {
      this.$node.removeClass('enabled');
      this.trigger('disabled');
    };

    this.toggle = function() {
      if (this.$node.hasClass('enabled')) {
        this.disable();
      } else {
        this.enable();
      }
    }

    this.after('initialize', function () {
      this.on('click', this.toggle);
      this.on(document, 'requestEnable', this.enable);
      this.on(document, 'requestDisable', this.disable);
    });
  }

});
