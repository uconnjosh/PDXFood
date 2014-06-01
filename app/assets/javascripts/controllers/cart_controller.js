PDXFood2.CartController = Ember.ObjectController.extend({
  title: ' ',
  actions: {
  	createReview: function() {
  		var review = this.store.createRecord('review', {
  			title: this.get('title'),
  			cart: this.get('model')
  		});

  		var controller = this;

  		review.save().then(function(review){
  			controller.set('title', '');
  			controller.get('model.reviews').addObject(review);
  		});
  	},
    
  }
});