class CartSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :streetNumber, :street, :city
  
  embed :ids, include: :true
  
  has_many :reviews
end
