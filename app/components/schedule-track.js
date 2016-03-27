import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['track'],

  reservationsWrapper: Ember.computed('reservations.@each', 'selected.@each', function() {
    var selected = this.get('selected');

    return this.get('reservations').map(function(reservation) {
      return {
        model: reservation,
        isSelected: selected.contains(reservation)
      }
    });
  }),

  setupUi: function() {
    var _this = this;
    this.$().droppable({
      drop: function(event, ui) {
        // Ember.run.scheduleOnce('afterRender', this, function() {
          var $block = $(event.toElement);
          var id = $block.attr('id');
          var reservation = _this._viewRegistry[id].get('reservation');
          var reservable = _this.get('reservable');

          var hourWidth = _this.get('hourWidth');
          var startOffset = $block.position().left / hourWidth;
          var endOffset = startOffset + parseInt($block.css('width')) / hourWidth;

          // var blockStart = new Date(_this.get('start').getTime());
          // var blockEnd = new Date(_this.get('start').getTime());

          var blockStart = moment(_this.get('start'));
          var blockEnd = moment(_this.get('start'));

          var schedule = [
            // blockStart.addSeconds(startOffset * 3600),
            // blockEnd.addSeconds(endOffset * 3600)
            blockStart.add(startOffset * 3600, 'seconds'),
            blockEnd.add(endOffset * 3600, 'seconds')
          ]
          _this.sendAction('moveReservation', reservation, reservable, schedule);
        // });
      }
    });
  }.on('didInsertElement'),

  actions: {
    addEvent: function(startTime) {
      this.sendAction('addEvent', startTime, this.get('reservable'));
    },

    resizeReservation: function(session, hours) {
      this.sendAction('resizeReservation', session, hours);
    },

    select: function(reservation) {
      this.sendAction('select', reservation);
    },

    editDetails: function() {
      this.sendAction('editDetails');
    }
  }
});
