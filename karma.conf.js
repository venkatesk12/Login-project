module.exports = function(config) {
    config.set({
      // other configuration options
      logLevel: config.LOG_DEBUG,
      browsers: ['ChromeHeadless'],
      singleRun: true,
      frameworks: ['jasmine'],
      files: [
        // specify your test files here
      ],
      plugins: [
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-spec-reporter'
      ],
      reporters: ['spec'],
    });
  };
  