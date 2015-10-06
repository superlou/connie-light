import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  schedules: DS.hasMany('schedule'),
  places: DS.hasMany('place')
});
