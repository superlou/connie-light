/* global moment */
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['schedule-grid'],

  placesSorting: ['order'],
  placesSorted: Ember.computed.sort('places', 'placesSorting'),

  selected: null,

  hours: function() {
    var start = moment(this.get('start')).minutes(0);
    var finish = moment(this.get('finish'));
    var current = moment(start);
    var hours = [];

    while (current.isBefore(finish)) {
      hours.push(moment(current));
      current.add(1, 'hour');
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

    select: function(model) {
      // if (this.get('selected')) {
      //   this.set('selected.isSelected', false);
      //   this.set('selected', null);
      // }
      //
      // component.set('isSelected', true);
      // this.set('selected', component);
      //
      // // Have been passing component, really gross
      // var model = component.get('reservation');
      // if (!model) {
      //   model = component.get('place')
      // }
      this.sendAction('select', model);
    },

    editDetails: function() {
      this.sendAction('editDetails');
    },

    reorderPlaces: function(places/*, draggedPlace*/) {
      places.forEach((place, index) => {
        place.set('order', index);
        place.save();
      });
    }
  }
});
