'use strict';

describeComponent('component/switch', function () {

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    setupComponent();
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  it('should toggle on and off state', function () {
    expect(this.component.$node).not.toHaveClass('enabled');
    this.component.$node.trigger('click');
    expect(this.component.$node).toHaveClass('enabled');
    this.component.$node.trigger('click');
    expect(this.component.$node).not.toHaveClass('enabled');
  });

  it('should fire enabled and disabled events as toggled', function () {
    expect(this.component.$node).not.toHaveClass('enabled');

    spyOnEvent(this.component.$node, 'enabled');
    spyOnEvent(this.component.$node, 'disabled');

    this.component.$node.trigger('click');

    expect('enabled').toHaveBeenTriggeredOn(this.component.$node);

    this.component.$node.trigger('click');

    expect('disabled').toHaveBeenTriggeredOn(this.component.$node);
  });

});
