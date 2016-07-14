define(function(ajax) {

  var obj = {};

  obj.start = function() {

    alert('ajax start');

  };

  obj.LoadIntoElement = function( elementID, pageUrl, callbackFunction ){

    $.ajax({
          url: pageUrl,
          type: 'GET',
          data: null,
          cache: false,
          success: function(result){

            $(elementID).html(result);

            if(typeof callbackFunction != 'undefined')
            {
              callbackFunction(result);
            }

          },
          error: callbackFunction
      });

      //$( elmentID ).load( pageUrl, callbackFunction );

  };

  obj.LoadIntoContainer = function( pageUrl, callbackFunction ){
  for (var i = 1; i < 99999; i++)
    window.clearInterval(i);
      $( ".right-side" ).load( pageUrl, callbackFunction );
  };

  obj.GetJson = function(url, callbackFunction)
  {
      $.getJSON(url, callbackFunction);

  };

  obj.Get = function(url, data, callbackFunction)
  {
    $.ajax({
          url: url,
          type: 'GET',
          data: data,
          cache: false,
          success: callbackFunction,
          error: callbackFunction
      });
  };

  obj.Post = function(url, data, callbackFunction)
  {
    $.ajax({
          url: url,
          type: 'POST',
          data: data,
          cache: false,
          success: callbackFunction,
          error: callbackFunction
      });
  };

  obj.Put = function(url, data, callbackFunction)
  {
    $.ajax({
          url: url,
          type: 'PUT',
          data: data,
          success: callbackFunction,
          error: callbackFunction
      });
  };

  obj.Delete = function(url, data, callbackFunction)
  {
    $.ajax({
          url: url,
          type: 'DELETE',
          data: data,
          success: callbackFunction,
          error: callbackFunction
      });
  };

  return obj;


});
