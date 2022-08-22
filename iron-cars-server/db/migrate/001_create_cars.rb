class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.integer :year
      t.integer :mileage
      t.float :highest_bid
      t.float :buy_now
      t.string :bidder
      t.integer :seller_id
      t.text :description
      t.string :image_url
    end
  end
end
