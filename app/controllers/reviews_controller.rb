class ReviewsController < ApplicationController
  def index
  	@reviews = Review.all
  	render :json => @review
  end

  def create
  	@review = Review.create(review_params)

  	if @review.save
  		render :json => @review, :status => 201
  	else
  		render :json => {:errors => @review.errors}, :status => 422
  	end
  end

  def show
  	@review = Review.find(params[:id])
  	if @review.update(review_params)
  		head :no_content
  	else
  		render :json => @review.errors, :status => 422
  	end
  end

  def destroy
  	@review = Review.find(params[:id])
  	@review.destroy
  	head :no_content
  end

private

  def review_params
  	params.fetch(:review).permit(:title, :content, :rating, :cart_id)
  end

end
