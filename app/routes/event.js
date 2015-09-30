import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('event', params.event_id);
  },

  actions: {
    save: function(model) {
      model.save();
    }
  }
});
