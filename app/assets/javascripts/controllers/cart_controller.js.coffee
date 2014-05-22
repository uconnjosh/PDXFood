PDXFood2.CartController = Ember.ObjectController.extend(
  title: " "
  actions:
    createReview: ->
      review = @store.createRecord("review",
        title: @get("title")
        cart: @get("model")
      )
      controller = this
      review.save().then (review) ->
        controller.set "title", ""
        controller.get("model.reviews").addObject review
   
)

