import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save: function() {
      this.sendAction('saveModel', 'session', this.get('model'));
    }
  }
});
