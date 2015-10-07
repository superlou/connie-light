import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  schedules: DS.hasMany('schedule', {async: true}),
  places: DS.hasMany('place'),
  sessions: DS.hasMany('sessions')
});
