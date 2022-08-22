class CreateSoldCars < ActiveRecord::Migration[6.1]
  def change
    create_table :sold_cars do |t|
      t.string :make
      t.string :model
      t.integer :year
      t.integer :mileage
      t.float :sold_price
      t.string :buyer
      t.integer :seller_id
      t.text :description
      t.string :image_url
    end
  end
end
