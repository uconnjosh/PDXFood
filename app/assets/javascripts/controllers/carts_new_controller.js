PDXFood2.CartsNewController = Ember.ObjectController.extend({
  
  actions: {
    
  	anotherCart: function() {
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
