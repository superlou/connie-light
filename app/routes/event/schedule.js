import Ember from 'ember';

export default Ember.Route.extend({
  model: function(param) {
    return this.store.find('schedule');
  },

  actions: {
    createSchedule: function(data) {
      var event = data.event;

      var schedule = this.store.createRecord('schedule', {
        start: data.start,
        finish: data.finish,
        name: data.name,
        event: data.event
      });

      schedule.save();
    }
  }
});
