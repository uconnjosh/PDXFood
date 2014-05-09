class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :rating, :cart_id
end

