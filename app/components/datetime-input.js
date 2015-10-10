import Ember from 'ember';

export default Ember.Component.extend({
  textValue: Ember.computed('value', {
    get(key) {
      return moment(this.get('value')).format("YYYY-MM-DD h:mm:ss a");
    },
    set(key, value) {
      var m = moment(value);
      if (m.isValid()) {
        // Check for recursion
        if( m.toDate().getTime() !== this.get('value').getTime()) {
          console.log(m.toDate().getTime());
          console.log(this.get('value').getTime());
          this.set('value', m.toDate());
        }
      }
    }
  })
});
