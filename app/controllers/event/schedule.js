import Ember from 'ember';

export default Ember.Controller.extend({
  eventController: Ember.inject.controller('event'),
  event: Ember.computed.reads('eventController.model'),

  newSchedule: false,
  newScheduleName: "New Schedule",
  newScheduleDate: new Date(),
  newScheduleStart: "9:00:00",
  newScheduleFinish: "17:00:00",

  newPlace: false,
  newPlaceName: "New Place",

  newSession: false,
  newSessionName: "New Session",
  newSessionPlace: null,
  newSessionStart: null,
  newSessionDuration: "30",

  selected: [],

  isEditingDetails: Ember.computed('selected.@each', function() {
    return (this.get('selected').length > 0);
  }),

  detailedModel: Ember.computed('selected.@each', function() {
    return this.get('selected.lastObject');
  }),

  detailedModelDetails: Ember.computed('detailedModel', function() {
    var modelType = this.get('detailedModel.constructor.modelName');

    if (modelType == "schedule") {
      return "schedule-details";
    } else if (modelType == "session") {
      return "session-details";
    } else if (modelType == "place") {
      return "place-details";
    }
  }),

  actions: {
    newSchedule: function() {
      this.set('editSchedule', true);
    },

    removeNewSchedule: function() {
      this.set('editSchedule', false);
    },

    createNewSchedule: function() {
      var date = moment(this.get('newScheduleDate'));
      var date_string = date.format("YYYY-MM-DD");
      var start = moment(date_string + " " + this.get('newScheduleStart'));
      var finish = moment(date_string + " " + this.get('newScheduleFinish'));

      this.send('createSchedule', {
        name: this.get('newScheduleName'),
        start: start.toDate(),
        finish: finish.toDate(),
        event: this.get('event')
      });

      this.set('newSchedule', false);
    },

    newPlace: function() {
      this.set('newPlace', true);
    },

    removeNewPlace: function() {
      this.set('newPlace', false);
    },

    createNewPlace: function() {
      this.send('createPlace', {
        name: this.get('newPlaceName'),
        event: this.get('event')
      });

      this.set('newPlace', false);
    },

    removeNewSession: function() {
      this.set('newSession', false);
      this.set('place', null);
    },

    createNewSession: function() {
      var start = this.get('newSessionStart');
      var duration = this.get('newSessionDuration');
      var finish = moment(start).add(duration, 'minutes');

      this.send('createSession', {
        name: this.get('newSessionName'),
        start: start,
        finish: finish,
        duration: duration,
        place: this.get('newSessionPlace')
      });

      this.set('newSession', false);
      this.set('newSessionPlace', null);
    },

    select: function(model) {
      if (this.get('selected').contains(model)) {
        this.get('selected').removeObject(model);
      } else {
        this.set('selected', [model]);
      }
    }
  }
});
