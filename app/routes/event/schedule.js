import Ember from 'ember';

export default Ember.Route.extend({
  model: function(param) {
    var event = this.modelFor('event');
    return event.get('schedules');
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
      event.get('schedules').addObject(schedule);
      event.save();
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
    },

    newSession: function(start, place) {
      var eventSchedule = this.controllerFor('event.schedule');
      eventSchedule.set('newSession', true);
      eventSchedule.set('newSessionStart', start);
      eventSchedule.set('newSessionPlace', place);
    },

    createSession: function(data) {
      var place = data.place;
      var event = this.controllerFor('event').get('model');
      var schedule = this.controllerFor('event.schedule.show').get('model');

      var session = this.store.createRecord('session', {
        name: data.name,
        description: "",
        place: data.place,
        start: data.start.toDate(),
        finish: data.finish.toDate(),
        duration: data.duration,
        event: event
      });

      place.get('sessions').addObject(session);
      event.get('sessions').addObject(session);

      session.save().then(function() {
        place.save();
        event.save();
      });
    },

    moveReservation: function(session, newPlace, times) {
      var oldPlace = session.get('place');
      oldPlace.get('sessions').removeObject(session);

      session.set('place', newPlace);
      session.set('start', times[0].toDate());
      session.set('finish', times[1].toDate());

      newPlace.get('sessions').addObject(session);

      session.save().then(function() {
        oldPlace.save();
        newPlace.save();
      });
    },

    resizeReservation: function(session, newHours) {
      var minutes = newHours * 60;
      var roundedMinutes = 5 * Math.round(minutes / 5);
      var finish = moment(session.get('start')).add(roundedMinutes, 'minutes');

      session.set('duration', roundedMinutes);
      session.set('finish', finish.toDate());
      session.save();
    },

    updateModel: function(type, model) {
      model.save();
    },

    editDetails: function() {
      this.controllerFor('event.schedule').toggleProperty('isEditingDetails')
    }
  },
});
