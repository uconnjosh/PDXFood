PDXFood2::Application.routes.draw do
  root :to => 'application#index'
  resources :carts, :except => [:new, :edit]
  resources :reviews, :except => [:new, :edit]
end
