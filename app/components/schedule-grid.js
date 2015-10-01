import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['schedule-grid'],

  hours: function() {
    var start = this.get('start').reset('minutes');
    var finish = this.get('finish');

    var current = new Date(start.getTime());
    var hours = [];

    while (current.isBefore(finish)) {
      hours.push(new Date(current.getTime()));
      current.advance('hour');
    }

    return hours;
  }.property('start', 'finish'),

  tracksWidthStyle: function() {
    var width = this.get('hourWidth') * this.get('hours').length;
    return ("width:" + width + 'px').htmlSafe();
  }.property('hours', 'hourWidth'),

  hourWidthStyle: function() {
    var width = this.get('hourWidth');
    return ("width:" + width + "px").htmlSafe();
  }.property('hourWidth'),

  actions: {
    moveReservation: function(reservation, reservable, schedule) {
      this.sendAction('moveReservation', reservation, reservable, schedule);
    },

    selectEvent: function(startTime, reservable) {
      this.sendAction('selectEvent', startTime, reservable);
    }
  }
});
