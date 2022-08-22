class Seller < ActiveRecord::Base
  has_many :cars
  has_many :sold_cars
end