define(['common/constants', 'text!views/shared/pagenotfound.htm'], function(constants,template) {

  var obj = {};

  obj.start = function(){

    $(constants.mainAppContainerId).html(template);

  };

  return obj;
});
