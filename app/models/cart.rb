class Cart < ActiveRecord::Base
	has_many :reviews
	validates :name, :presence => true
end
