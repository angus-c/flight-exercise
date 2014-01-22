'use strict';

describeComponent('component/switch', function () {

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    setupComponent();
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  //click tests
  it('should toggle on and off state on click', function () {
    expect(this.component.$node).not.toHaveClass(this.component.attr.onClass);
    this.component.$node.trigger('click');
    expect(this.component.$node).toHaveClass(this.component.attr.onClass);
    this.component.$node.trigger('click');
    expect(this.component.$node).not.toHaveClass(this.component.attr.onClass);
  });

  it('should toggle firing of enabled and disabled events on click', function () {
    expect(this.component.$node).not.toHaveClass(this.component.attr.onClass);

    spyOnEvent(this.component.$node, 'buttonOn');
    spyOnEvent(this.component.$node, 'buttonOff');

    this.component.$node.trigger('click');
    expect('buttonOn').toHaveBeenTriggeredOn(this.component.$node);

    this.component.$node.trigger('click');
    expect('buttonOff').toHaveBeenTriggeredOn(this.component.$node);
  });

});
