/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'connie-light',
    environment: environment,
    contentSecurityPolicy: {
      'font-src': "'self' data:",
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com",
      'style-src': "'self' 'unsafe-inline'"
    },
    firebase: 'https://sweltering-inferno-4868.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    moment: {
      outputFormat: 'h:mm a, MMM Do YYYY'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = 'connie';
  }

  return ENV;
};
