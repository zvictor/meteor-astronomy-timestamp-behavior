Package.describe({
  summary: 'Timestamp behavior for Meteor Astronomy',
  version: '1.1.0',
  name: 'zvictor:astronomy-timestamp-behavior',
  git: 'https://github.com/zvictor/meteor-astronomy-timestamp-behavior.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('zvictor:astronomy@1.2.0');
  api.use('underscore');

  // Behavior.
  api.addFiles('lib/behavior/events.js', ['client', 'server']);
  api.addFiles('lib/behavior/behavior.js', ['client', 'server']);
});
