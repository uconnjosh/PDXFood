class CartSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :streetNumber, :street, :city
end
