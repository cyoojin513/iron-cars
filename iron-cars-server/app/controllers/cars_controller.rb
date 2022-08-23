class CarsController < ApplicationController
  post "/cars" do
    new_car = Car.create(car_parameters)
    new_car.to_json
  end

  patch "/cars/:id" do

    # Only accept the bid if the new bid is higher than the highest_bid
    updated_car = Car.find(params[:id]) 
    current_bid = updated_car.highest_bid

    params[:new_bid] > current_bid ? updated_car.update(highest_bid: params[:new_bid], bidder: params[:bidder]) : nil

    updated_car.to_json
  end

  def car_parameters

    # Need logic hear to check if the Seller Name (the person who is submitting the car to sell on the front end)
    # exists in the sellers (Seller) table or not.
    # If they exist, get their seller_id and pass it in as the value for seller_id
    # if they don't exist also post so the Seller table

    new_seller_id = Seller.last.id + 1
    find_seller_name = Seller.find_by(name: params[:seller_name])

    find_seller_name ? new_seller_id = find_seller_name.id : new_seller_id

    {
      make: params[:make],
      model: params[:model],
      year: params[:year],
      mileage: params[:mileage],
      highest_bid: 0,
      buy_now: params[:buy_now],
      bidder: "No Bids",
      seller_id: new_seller_id,
      description: params[:description],
      image_url: params[:image_url],
    }
  end

end