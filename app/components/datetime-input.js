import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['datetime-input'],

  textValue: Ember.computed('value', function() {
    return this.newTextValue();
  }),

  actions: {
    selectSuggestion: function() {
      if (this.get('suggestion')) {
        this.set('value', this.get('suggestion'));
        this.set('suggestion', null);
      }
    },

    removeSuggestion: function() {
      this.notifyPropertyChange('textValue');
      this.set('suggestion', null);
    },

    change: function(text, event) {
      if (event.which === 40 || event.which === 13) {
        this.send('selectSuggestion');
      } else {
        let referenceDate = this.get('value');
        let suggestion = chrono.parseDate(text, referenceDate);
        this.set('suggestion', suggestion);
      }
    }
  },

  newTextValue: function() {
    return moment(this.get('value')).format("h:mm a, MMM Do YYYY");
  }
});
