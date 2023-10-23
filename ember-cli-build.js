'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    babel: {
      sourceMaps: 'inline',
    },
    sourcemaps: {
      enabled: true,
      extensions: ['js', 'ts'],
    },
  });

  return app.toTree();
};
