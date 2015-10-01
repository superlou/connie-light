import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  start: DS.attr('date'),
  finish: DS.attr('date'),
  event: DS.belongsTo('event'),
  places: DS.hasMany('place', {async: true}),
  sessions: DS.hasMany('sessions')
});
