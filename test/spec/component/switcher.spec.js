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
    expect(this.component.$node).toHaveClass(this.component.attr.onClass);
    this.component.$node.trigger('click');
    expect(this.component.$node).not.toHaveClass(this.component.attr.onClass);
  });

  it('should toggle firing of buttonOn and buttonOff events', function () {
    spyOnEvent(this.component.$node, 'buttonOn');
    this.component.$node.trigger('click');
    expect('buttonOn').toHaveBeenTriggeredOn(this.component.$node);

    spyOnEvent(this.component.$node, 'buttonOff');
    this.component.$node.trigger('click');
    expect('buttonOff').toHaveBeenTriggeredOn(this.component.$node);
  });

});
