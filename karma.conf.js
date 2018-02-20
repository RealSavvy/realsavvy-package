// Karma configuration
// Generated on Tue Feb 13 2018 17:47:19 GMT-0600 (CST)

let webpackConfig = require('./webpack.config.js')[0];
webpackConfig.entry = null;

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'test/fixtures/**/*.json',
      'test/helper/**/*.js',
      'test/test_runner.js',
      {pattern: 'src/*/*.js', included: false},
      'src/index.js',
      'test/browser.entry.js',
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/index.js': ['webpack'],
      'test/test_runner.js': ['babel'],
      'test/helper/**/*.js': ['babel'],
      'test/browser.entry.js': ['babel'],
      'test/fixtures/**/*.json': ['json_fixtures'],
      'src/**/*.js': ['eslint'],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack: webpackConfig,

    babelPreprocessor: {
      options: {
        presets: ['es2015', 'stage-3'],
        plugins: ['transform-es2015-modules-umd'],
        sourceMap: 'inline'
      }
    },

    jsonFixturesPreprocessor: {
      variableName: '__fixtures__',
      stripPrefix: 'test/fixtures/',
    },

    eslint: {
      stopOnError: false,
    }
  })
}
