// For more information see: http://emberjs.com/guides/routing/

PDXFood2.Router.map(function() {
  this.resource('carts', { path: '/' });
  this.resource('new_cart', { paths: '/carts/new'});
  this.resource('cart', { path: '/carts/:id'});

});
