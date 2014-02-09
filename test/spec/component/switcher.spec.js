'use strict';

describeComponent('component/switcher', function () {

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    setupComponent();
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  it('should toggle on and off state', function () {
    expect(this.component.$node).not.toHaveClass(this.component.attr.onClass);
    this.component.$node.trigger('click');
    // 1) test that the component node now has the onClass
    // 2) simulate another click
    // 3) test that the component node no longer has the onClass
  });

  it('should toggle firing of buttonOn and buttonOff events', function () {
    spyOnEvent(this.component.$node, 'buttonOn');
    // 4) simulate a click
    expect('buttonOn').toHaveBeenTriggeredOn(this.component.$node);

    // 5) spy on button off event
    // 6) simulate another click
    // 7) test that 'buttonOff' event had been triggered
  });

});
