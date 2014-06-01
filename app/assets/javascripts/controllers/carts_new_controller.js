PDXFood2.CartsNewController = Ember.ObjectController.extend({
  
  actions: {
    
  	anotherCart: function() {
  		var model = this.get('model');
  		var controller = this;

      alert(model.name);
  		model.save()
  		.then(function() {
        alert('This is the new cart controller!');
  			controller.transitionToRoute('cart', model);
  		})
      .catch(function() {
        alert("Please fix the problems noted in red.")
      });
  	}
  }
});
