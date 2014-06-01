PDXFood2.CartsNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.createRecord('cart');
	}
});