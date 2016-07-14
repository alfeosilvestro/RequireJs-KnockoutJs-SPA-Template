// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {

      "jquery":"jquery-2.2.4.min",
      "knockout":"knockout-3.4.0",
      "knockout-mapping":"knockout-mapping",
      "bootstrap":"bootstrap",

      "common": "../common",
      "models": "../models",
      "viewModels": "../view_models",
      "controller": "../controller",

      "views":"../../views"

    },
    // configuration dependencies

    deps: ['knockout', 'knockout-mapping'],

    // configuration callback

    callback: function (ko, mapping) {
      ko.mapping = mapping;
    }
});

requirejs(['text', 'jquery', 'bootstrap']);

requirejs(['common/config'], function(config){

  config.registerNavigationButtonClicks();

});
