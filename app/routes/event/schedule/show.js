import Ember from 'ember';

export default Ember.Route.extend({
  model: function(param) {
    this.store.find('place');   // Hacky fix for places not being loaded
    return this.store.findRecord('schedule', param.schedule_id);
  }
});
