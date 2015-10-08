import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],
  classNames: ['reservation-block'],
  classNameBindings: ['isDirty'],

  // isDirty: function() {
  //   return (this.get('reservation.isDirty') || this.get('reservation.event.isDirty'));
  // }.property('reservation.isDirty', 'reservation.event.isDirty'),

  style: function() {
    var style = "width:" + this.get('width') + "px;left:" + this.get('left') + "px";
    return style.htmlSafe();
  }.property('width', 'left'),

  width: function() {
    var start = this.get('reservation.start');
    var finish = this.get('reservation.finish');
    var lengthInHours = (finish - start) / (1e3 * 3600);
    return lengthInHours * this.get('hourWidth');
  }.property('reservation.start', 'reservation.finish', 'hourWidth'),

  left: function() {
    var start = this.get('reservation.start');
    var offset = start - this.get('trackStart');
    return offset / (1e3 * 3600) * this.get('hourWidth');
  }.property('reservation.start', 'trackStart', 'hourWidth'),

  setupUi: function() {
    var _this = this;

    this.$().draggable({
      stack: '.tracks',
      grid: [this.get('hourWidth')/12.0, 51]
    });

    this.$().resizable({
      // grid: [this.get('hourWidth')/12.0, 1], todo: fix error with grid being
      // absolute to page, not scroll
      handles: 'e, w',
      containment: 'parent',
      stop: function(event, ui) {
        var width = ui.size.width;
        var hours = width / _this.get('hourWidth');
        _this.sendAction('resizeReservation', _this.get('reservation'), hours);
      }
    });
  }.on('didInsertElement', 'hourWidth')
});
