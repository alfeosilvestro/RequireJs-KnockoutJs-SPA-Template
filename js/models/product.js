define(["knockout"],function(ko) {

  function Product(name, rating) {
      this.name = name;
      this.userRating = ko.observable(rating || null);
  }

  return Product;

});
