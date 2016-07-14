define(function(config) {

  var obj = {};
  var routeRegister = {};

  requirejs(['common/routes', 'common/constants'], function(routes)
  {
    routeRegister = routes;
  });

  var showPageNotFound = function(){
    requirejs(['common/pagenotfound'], function(pagenotfound){

      pagenotfound.start();

    });
  };

  var onclick_NavigationButton = function(){

    console.log(routeRegister);

    var url = $(this).attr('href');
    var page = routeRegister.register[url]

    // clear active class on navigation
    $('.navigation').parent().removeClass('active');

    if(typeof page != 'undefined'){

      //require.undef(page); // to un-define module and force reload

      try{

        requirejs([page.path], function(page){

          page.start();

        });

        $(this).parent().toggleClass('active');

      }catch(e){

        showPageNotFound();

      }

    }
    else {

      showPageNotFound();

    }

  };

  obj.registerNavigationButtonClicks = function(){

    $('body').off('click', '.navigation');
    $('body').on('click', '.navigation', onclick_NavigationButton);

  };

  return obj;


});
