class CartsController < ApplicationController
  def index
  	@carts = Cart.all
  	render :json => @carts 
  end

  def create
    @cart = Cart.create(cart_params)

    if @cart.save
      render :json => @cart, :status => 201
    else
      render :json => {:errors => @cart.errors}, :status => 422
    end
  end

  def show
  	@cart = Cart.find(params[:id])
  	render :json => @cart
  end

   def update
    @cart = Cart.find(params[:id])
    if @cart.update(cart_params)
      head :no_content
    else
      render :json => {:errors => @cart.errros}, :status => 422
    end
  end

  def destroy
  	@cart = Cart.find(params[:id])
  	@cart.destroy
  	head :no_content
  end



private

  def cart_params
  	params.fetch(:cart).permit(:name, :description, :streetNumber, :street, :city)
  end
end
