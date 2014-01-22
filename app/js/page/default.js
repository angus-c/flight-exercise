define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var Switch = require('component/switch');
  var KeyboardShortcuts = require('flight-keyboard-shortcuts/lib/keyboard-shortcuts');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    KeyboardShortcuts.attachTo(document, {
      shortcuts: {
        'o': 'requestOn',
        'f': 'requestOff'
      }
    });

    Switch.attachTo('#switch');
  }

});
