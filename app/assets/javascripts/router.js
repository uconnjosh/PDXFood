// For more information see: http://emberjs.com/guides/routing/

PDXFood2.Router.map(function() {
  this.resource('carts', { path: '/' });
  this.resource('cart', { path: '/contacts/:id'});
});
