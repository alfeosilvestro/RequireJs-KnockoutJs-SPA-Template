define(["knockout", "common/ajax", "models/product"], function(ko, ajax, Product) {

  function MyViewModel() {
      this.products = [
          new Product('Garlic bread'),
          new Product('Dark chocolat', 'dislike'),
          new Product('Seagull spaghetti', 'like') // This one was already 'liked'
      ];
  }

  return new MyViewModel();

});
