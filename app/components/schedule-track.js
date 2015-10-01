import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['track'],

  setupUi: function() {
    var _this = this;
    this.$().droppable({
      drop: function(event, ui) {
        Ember.run.scheduleOnce('afterRender', this, function() {
          var $block = $(event.toElement);
          var id = $block.attr('id');
          var reservation = Ember.View.views[id].get('reservation');
          var reservable = _this.get('reservable');

          var hourWidth = _this.get('hourWidth');
          var startOffset = $block.position().left / hourWidth;
          var endOffset = startOffset + parseInt($block.css('width')) / hourWidth;

          var blockStart = new Date(_this.get('start').getTime());
          var blockEnd = new Date(_this.get('start').getTime());

          var schedule = [
            blockStart.addSeconds(startOffset * 3600),
            blockEnd.addSeconds(endOffset * 3600)
          ]
          _this.sendAction('moveReservation', reservation, reservable, schedule);
        });
      }
    });
  }.on('didInsertElement'),

  actions: {
    selectEvent: function(startTime) {
      this.sendAction('selectEvent', startTime, this.get('reservable'));
    }
  }
});
