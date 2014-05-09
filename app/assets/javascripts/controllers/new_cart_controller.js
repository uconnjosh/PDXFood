PDXFood2.NewCartController = Ember.ObjectController.extend({
  actions: {
  	createCart: function() {
  		var model = this.get('model');
  		var controller = this;

  		model.save()
  		.then(function() {
  			controller.transitionToRoute('cart', model);
  		});
  	}
  }

});