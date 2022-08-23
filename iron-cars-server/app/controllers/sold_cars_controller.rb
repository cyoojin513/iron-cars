class SoldCarsController < ApplicationController
  get "/sold-cars" do
    SoldCar.all.to_json
  end

  post "/sold-cars" do
    SoldCar.create(sold_car_parameters).to_json
  end

  def sold_car_parameters
    find_seller_name = Seller.find_by(name: params[:seller_name])
    
    { 
      make: params[:make],
      model: params[:model],
      year: params[:year],
      mileage: params[:mileage],
      sold_price: params[:buy_now],
      buyer: params[:buyer_name],
      seller_id: find_seller_name.id,
      description: params[:description],
      image_url: params[:image_url],
    }
  end
end