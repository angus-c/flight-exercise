define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var Switch = require('component/switch'),
      KeyboardShortcuts = require('bower_components/flight-keyboard-shortcuts/lib/keyboard-shortcuts');

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
        'o': [{
          eventName: 'requestEnable'
        }],
        'f': [{
          eventName: 'requestDisable'
        }]
      }
    });

    Switch.attachTo("#onoff");
  }

});
