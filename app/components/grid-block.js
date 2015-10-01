import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['grid'],
  classNameBindings: ['gridType'],
  attributeBindings: ['style'],

  gridType: function() {
    if (this.get('type') === 'major') {
      return 'major-grid';
    } else {
      return 'minor-grid';
    }
  }.property('type'),

  style: function() {
    var width = this.get('hourWidth') / 2;
    return ("width:" + width + "px").htmlSafe();
  }.property('hourWidth'),

  startTime: function() {
    return new Date(this.get('hour').getTime()).addMinutes(this.get('offset'));
  }.property('hour', 'offset'),

  click: function() {
    this.sendAction('selectEvent', this.get('startTime'));
  }
});
