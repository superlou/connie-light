import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('event', {path: '/event/:event_id'}, function() {
    this.route('schedule', function() {
      this.route('show', {path: '/:schedule_id'});
    });
  });
});

export default Router;
