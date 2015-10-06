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
      event.get('schedules').addObject(schedule).save();
    },

    newPlace: function() {
      this.controllerFor('event.schedule').set('newPlace', true);
    },

    createPlace: function(data) {
      var event = data.event;

      var place = this.store.createRecord('place', {
        name: data.name,
        event: data.event
      });

      event.get('places').addObject(place);
      event.get('schedules').forEach(function(schedule) {
        schedule.get('places').addObject(place);
        schedule.save();
      });

      place.save();
      event.save();
    }
  },
});
