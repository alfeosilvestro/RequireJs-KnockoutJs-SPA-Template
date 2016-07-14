define(function(routes) {

  var obj = {};

  obj.register = [];

  obj.register["#home"] = { path: "controller/home-index", translate_key: 'home', name: 'Home' };
  // obj.register["#about"] = { path: "app/about", translate_key: 'about', name: 'About' };
  // obj.register["#contact"] = { path: "app/contact", translate_key: 'contact', name: 'Contact' };

  return obj;


});
