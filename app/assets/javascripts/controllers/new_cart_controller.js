PDXFood2.NewCartController = Ember.ObjectController.extend({
  needs: 'review',
  review: Ember.computed.alias("controllers.review"),
  actions: {
  	createCart: function() {
  		var model = this.get('model');
  		var controller = this;

  		model.save()
  		.then(function() {
  			controller.transitionToRoute('cart', model);
  		})
      .catch(function() {
        alert("Please fix the problems noted in red.")
      });
  	}
  }
});
