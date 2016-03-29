import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('event', {path: '/event/:event_id'}, function() {
    this.route('schedule', function() {
      this.route('show', {path: '/:schedule_id'});
      this.route('configure');
    });
  });
});

export default Router;
