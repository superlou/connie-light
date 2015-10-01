import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],
  classNames: ['reservation-block'],
  classNameBindings: ['isDirty'],

  isDirty: function() {
    return (this.get('reservation.isDirty') || this.get('reservation.event.isDirty'));
  }.property('reservation.isDirty', 'reservation.event.isDirty'),

  style: function() {
    var style = "width:" + this.get('width') + "px;left:" + this.get('left') + "px";
    return style.htmlSafe();
  }.property('width', 'left'),

  width: function() {
    var start = this.get('reservation.event.start');
    var finish = this.get('reservation.event.finish');
    var lengthInHours = (finish - start) / (1e3 * 3600);
    return lengthInHours * this.get('hourWidth');
  }.property('reservation.event.start', 'reservation.event.finish', 'hourWidth'),

  left: function() {
    var start = this.get('reservation.event.start');
    var offset = start - this.get('trackStart');
    return offset / (1e3 * 3600) * this.get('hourWidth');
  }.property('reservation.event.start', 'trackStart', 'hourWidth'),

  setupUi: function() {
    this.$().draggable({
      stack: '.tracks',
      grid: [this.get('hourWidth')/12.0, 50]
    });

    this.$().resizable({
      grid: [this.get('hourWidth')/12.0, 1],
      handles: 'e, w'
    });
  }.on('didInsertElement', 'hourWidth')
});
