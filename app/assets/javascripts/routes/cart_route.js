PDXFood2.CartRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('cart', params.id);
	}
});