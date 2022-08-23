class SellersController < ApplicationController
  post "/sellers" do

    find_seller_name = Seller.find_by(name: params[:seller_name])
    find_seller_name ? "Seller already exists, no new entry" : new_seller = Seller.create(name: params[:seller_name])

    new_seller.to_json
  end

end