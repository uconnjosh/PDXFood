PDXFood2.NewCartRoute = Ember.Route.extend({
	model: function() {
		return this.store.createRecord('cart');
	}
});