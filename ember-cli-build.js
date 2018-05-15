'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('node_modules/bootstrap/dist/css/bootstrap.css');
  app.import('node_modules/bootstrap/dist/js/bootstrap.js');
  
  return app.toTree();
};
