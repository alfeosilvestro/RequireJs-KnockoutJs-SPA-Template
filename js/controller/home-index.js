define(["knockout", "common/ajax",'viewModels/home-index', 'common/constants',
'text!views/home/index.htm'], function(ko, ajax, vm_home, constants, template) {

    var obj = {};

    obj.start = function(){

      this.render();
      this.registerEvents();

    };

    obj.render = function(){

      $(constants.mainAppContainerId).html(template);

      var element = document.getElementById('tblProducts');

      //ko.cleanNode(element); // not necessary anymore
      ko.options.deferUpdates = true;
      ko.applyBindings(vm_home, element);

    };

    obj.registerEvents = function(){

      $('body').off('click', '.list-group-item');
      $('body').on('click', '.list-group-item', function(){

        $('.list-group-item').removeClass('active');
        $(this).toggleClass('active');

      });

    };

    return obj;

});
