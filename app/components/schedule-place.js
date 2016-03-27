import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,

  click: function() {
    this.sendAction('select', this);
  },

  doubleClick: function() {
    this.sendAction('editDetails');
  }
});
