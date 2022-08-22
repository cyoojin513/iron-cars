class SoldCarsController < ApplicationController
  get "/sold-cars" do
    SoldCar.all.to_json
  end
end