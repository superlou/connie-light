import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  schedule: DS.belongsTo('schedule'),
  sessions: DS.hasMany('session')
});
