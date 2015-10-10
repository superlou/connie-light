import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['schedule-grid'],

  selected: null,

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

    addEvent: function(startTime, reservable) {
      this.sendAction('addEvent', startTime, reservable);
    },

    newPlace: function() {
      this.sendAction('newPlace');
    },

    resizeReservation: function(session, hours) {
      this.sendAction('resizeReservation', session, hours);
    },

    select: function(session) {
      if (this.get('selected')) {
        this.set('selected.isSelected', false);
        this.set('selected', null);
      }

      session.set('isSelected', true);
      this.set('selected', session);

      this.sendAction('select', session);
    }
  }
});
