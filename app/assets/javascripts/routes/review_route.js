PDXFood2.ReviewRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('review', params.id);
	}
});