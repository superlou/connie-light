import Ember from 'ember';

export default Ember.TextField.extend({
  attributeBindings: ['value'],
  classNames: ['editable-name-input'],
  classNameBindings: ['notNamed'],
  autoresize: true,

  notNamed: Ember.computed('value', function() {
    if (this.get('value') === "Untitled event") {
      return true;
    } else {
      return false;
    }
  }),

  focusOut: function() {
    this.sendAction('update', this.get('value'));
  }
});
