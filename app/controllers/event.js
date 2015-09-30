import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateName: function(name) {
      this.set('model.name', name);
      this.send('save', this.get('model'));
    }
  }
});
