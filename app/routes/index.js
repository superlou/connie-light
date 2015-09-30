import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('event');
  },

  actions: {
    newEvent: function() {
      var event = this.store.createRecord('event', {
        name: "Untitled event"
      });
      event.save();
      this.transitionTo('event', event);
    }
  }
});
