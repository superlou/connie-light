import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    newSchedule: function() {
      this.controllerFor('event.schedule').send('newSchedule');
    }
  }
});
