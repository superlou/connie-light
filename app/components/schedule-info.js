import Ember from 'ember';

export default Ember.Component.extend({
  scheduled: function() {
    return this.get('start') && this.get('finish');
  }.property('start', 'finish')
});
