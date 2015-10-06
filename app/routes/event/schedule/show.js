import Ember from 'ember';

export default Ember.Route.extend({
  model: function(param) {
    return this.store.findRecord('schedule', param.schedule_id);
  }
});
