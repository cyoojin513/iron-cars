puts "🌱 Seeding spices..."

Car.destroy_all
Seller.destroy_all
SoldCar.destroy_all

Car.reset_pk_sequence
Seller.reset_pk_sequence
SoldCar.reset_pk_sequence

#seeding sellers
3.times do
  Seller.create(
    name: Faker::Name.name
  )
end

#seeding cars
sellerIds = Seller.pluck(:id)

# 10.times do
#   Car.create(
#     image_url: "https://static.techspot.com/images2/news/bigimage/2018/04/2018-04-12-image-18-j_1100.webp",
#     make: Faker::Vehicle.make,
#     model: Faker::Vehicle.model,
#     description: Faker::Vehicle.standard_specs.sample,
#     year: Faker::Vehicle.year,
#     mileage: Faker::Vehicle.mileage,
#     highest_bid: rand(10000.00..20000.00).round(2),
#     buy_now: rand(30000.00..50000.00).round(2),
#     bidder: Faker::Name.name,
#     seller_id: sellerIds.sample
#   )
# end

Car.create(
  image_url: "https://vehicle-photos-published.vauto.com/57/d7/bc/dd-081c-45e6-be26-93cfb1bb83fe/image-1.jpg",
  make: 'Mercedes-Benz',
  model: 'G-Class',
  description: Faker::Vehicle.standard_specs.sample,
  year: 2019,
  mileage: Faker::Vehicle.mileage,
  highest_bid: 153995.58,
  buy_now: 185500.00,
  bidder: Faker::Name.name,
  seller_id: sellerIds.sample
)

Car.create(
  image_url: "https://car-images.bauersecure.com/wp-images/3193/r8_decennium_050.jpg",
  make: 'Audi',
  model: 'R8 5.2 Plus',
  description: Faker::Vehicle.standard_specs.sample,
  year: 2017,
  mileage: Faker::Vehicle.mileage,
  highest_bid: 179986.63,
  buy_now: 206000.00,
  bidder: Faker::Name.name,
  seller_id: sellerIds.sample
)

Car.create(
  image_url: "https://images.hgmsites.net/hug/2016-nissan-gt-r-nismo_100531511_h.jpg",
  make: 'Nissan',
  model: 'GT-R Premium',
  description: Faker::Vehicle.standard_specs.sample,
  year: 2016,
  mileage: Faker::Vehicle.mileage,
  highest_bid: 52850.36,
  buy_now: 61000.00,
  bidder: Faker::Name.name,
  seller_id: sellerIds.sample
)

Car.create(
  image_url: "https://cdn.motor1.com/images/mgl/P33G24/s3/2022-bmw-i7.jpg",
  make: 'BMW',
  model: '7 Series 740i',
  description: Faker::Vehicle.standard_specs.sample,
  year: 2022,
  mileage: Faker::Vehicle.mileage,
  highest_bid: 80995.13,
  buy_now: 106900.00,
  bidder: Faker::Name.name,
  seller_id: sellerIds.sample
)

Car.create(
  image_url: "https://www.motortrend.com/uploads/2022/07/2023_Volvo_S90_Recharge_T8_AWD_Platinum_Grey-5.jpg",
  make: 'Volvo',
  model: 'S90',
  description: Faker::Vehicle.standard_specs.sample,
  year: 2022,
  mileage: Faker::Vehicle.mileage,
  highest_bid: 80995.13,
  buy_now: 106900.00,
  bidder: Faker::Name.name,
  seller_id: sellerIds.sample
)

# Victor's Cars

Car.create(
  image_url: "https://m.atcdn.co.uk/a/media/%7Bresize%7D/d68faa8c0bed4532874569e789693a88.jpg",
  make: 'Ferrari',
  model: '488',
  description: Faker::Vehicle.standard_specs.sample,
  year: 2017,
  mileage: Faker::Vehicle.mileage,
  highest_bid: 153995.58,
  buy_now: 185500.00,
  bidder: Faker::Name.name,
  seller_id: sellerIds.sample
)

Car.create(
  image_url: "https://i.pinimg.com/originals/35/e0/c0/35e0c03a8d4f661023eca6f1032f0a53.jpg",
  make: 'Audi',
  model: 'S8',
  description: Faker::Vehicle.standard_specs.sample,
  year: 2020,
  mileage: Faker::Vehicle.mileage,
  highest_bid: 179986.63,
  buy_now: 206000.00,
  bidder: Faker::Name.name,
  seller_id: sellerIds.sample
)

Car.create(
  image_url: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my22/c/cab/byo-options/2022-AMG-C-CABRIOLET-MP-039.jpg",
  make: 'Mercedes',
  model: 'AMG GT',
  description: Faker::Vehicle.standard_specs.sample,
  year: 2016,
  mileage: Faker::Vehicle.mileage,
  highest_bid: 52850.36,
  buy_now: 61000.00,
  bidder: Faker::Name.name,
  seller_id: sellerIds.sample
)

Car.create(
  image_url: "https://media.istockphoto.com/photos/lotus-demands-picture-id519172829?k=20&m=519172829&s=612x612&w=0&h=E7hR2GjUH7GHYaQDwj3PedF_w_SCQ7QqG20o61Jn12k=",
  make: 'Lotus',
  model: '519',
  description: Faker::Vehicle.standard_specs.sample,
  year: 2022,
  mileage: Faker::Vehicle.mileage,
  highest_bid: 80995.13,
  buy_now: 106900.00,
  bidder: Faker::Name.name,
  seller_id: sellerIds.sample
)

Car.create(
  image_url: "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/110007841/WP0AD2A90HS166889/2505f04d0921e2707e30cb0eeb39c58c.jpg",
  make: 'Porsche',
  model: '911 Turbo S',
  description: Faker::Vehicle.standard_specs.sample,
  year: 2022,
  mileage: Faker::Vehicle.mileage,
  highest_bid: 80995.13,
  buy_now: 106900.00,
  bidder: Faker::Name.name,
  seller_id: sellerIds.sample
)



#sedding sold cars
# 3.times do
#   SoldCar.create(
#     image_url: "https://static.techspot.com/images2/news/bigimage/2018/04/2018-04-12-image-18-j_1100.webp",
#     make: Faker::Vehicle.make,
#     model: Faker::Vehicle.model,
#     description: Faker::Vehicle.standard_specs.sample,
#     year: Faker::Vehicle.year,
#     mileage: Faker::Vehicle.mileage,
#     sold_price: rand(30000.00..50000.00).round(2),
#     buyer: Faker::Name.name,
#     seller_id: sellerIds.sample
#   )
# end

SoldCar.create(
  image_url: "https://www.goodcarbadcar.net/wp-content/uploads/2011/01/JaguarXJ.png",
  make: "Jaguar",
  model: "XL-Series",
  description: Faker::Vehicle.standard_specs.sample,
  year: 2015,
  mileage: 21689,
  sold_price: 48885.50,
  buyer: Faker::Name.name,
  seller_id: sellerIds.sample
)

SoldCar.create(
  image_url: "https://www.topgear.com/sites/default/files/news-listicle/image/413extreme-silver-33-1.jpg?w=848&h=477",
  make: "Bentley",
  model: "Bentayga W12",
  description: Faker::Vehicle.standard_specs.sample,
  year: 2018,
  mileage: 21639,
  sold_price: 140588.79,
  buyer: Faker::Name.name,
  seller_id: sellerIds.sample
)

SoldCar.create(
  image_url: "https://www.topgear.com/sites/default/files/news-listicle/image/row09068.jpg?w=848&h=477",
  make: "Bentley",
  model: "GT V8 AWD",
  description: Faker::Vehicle.standard_specs.sample,
  year: 2013,
  mileage: 53891,
  sold_price: 59991.43,
  buyer: Faker::Name.name,
  seller_id: sellerIds.sample
)


puts "✅ Done seeding!"
