// Karma configuration
// Generated on Tue May 16 2017 11:08:40 GMT-0300 (Hora oficial do Brasil)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //wiredep é usado para identificar as dependencias do bower e inclui-las na pagina de teste na ordem correta.
    //jasmine é o framework de teste em si.

    frameworks: ['wiredep', 'jasmine'],

      plugins : [ 'karma-jasmine', 'karma-wiredep', 'karma-chrome-launcher', 'karma-phantomJS-launcher' ],


       wiredep: {
         
            devDependencies: true, // default: false  
         
        },


    // list of files / patterns to load in the browser
    //Preciso colocar os modulos, controllers, tudo que for testado em conjunto com os testes em si.
    files: [
      'test/**/*.spec.js',
      'src/app/config/backToTop.module.js',
      'src/app/config/backToTop.run.js',
      'src/app/controller/backToTop.controller.js',
      'src/app/component/backToTop.component.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
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
    browsers: ['phantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
