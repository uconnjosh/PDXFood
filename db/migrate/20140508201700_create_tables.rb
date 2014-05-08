class CreateTables < ActiveRecord::Migration
  def change
    create_table :carts do |t|
    	t.string :name
    	t.text :description
    	t.string :streetNumber
    	t.string :street
    	t.string :city
    end
  end
  create_table :reviews do |t|
  	t.string :title
  	t.text :content
  	t.integer :rating
  	t.integer :cart_id
  end
end

