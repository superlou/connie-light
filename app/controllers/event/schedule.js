import Ember from 'ember';

export default Ember.Controller.extend({
  eventController: Ember.inject.controller('event'),
  event: Ember.computed.reads('eventController.model'),

  newSchedule: false,
  newScheduleName: "New Schedule",
  newScheduleDate: new Date(),
  newScheduleStart: "9:00:00",
  newScheduleFinish: "17:00:00",

  actions: {
    newSchedule: function() {
      this.set('newSchedule', true);
    },

    removeNewSchedule: function() {
      this.set('newSchedule', false);
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
    }
  }
});
