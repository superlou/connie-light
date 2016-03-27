import Ember from 'ember';

export default Ember.Component.extend({
  click: function() {
    this.sendAction('select', this.get('place'));
  },

  doubleClick: function() {
    this.sendAction('editDetails');
  }
});
