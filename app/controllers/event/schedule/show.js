import Ember from 'ember';

export default Ember.Controller.extend({
  scheduleController: Ember.inject.controller('event.schedule'),
  selected: Ember.computed.alias('scheduleController.selected'),
  detailedModel: Ember.computed.alias('scheduleController.detailedModel'),

  actions: {
    select: function(model) {
      this.get('scheduleController').send('select', model);
    }
  }
});
