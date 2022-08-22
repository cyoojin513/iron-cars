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

10.times do
  Car.create(
    image_url: "https://media.istockphoto.com/photos/illustration-of-generic-compact-white-car-front-side-view-picture-id1150931120?b=1&k=20&m=1150931120&s=612x612&w=0&h=y9F9VD231jV3hVKDJkOYkzgOpfbIzjk9JYkX8z7Ztpg=",
    make: Faker::Vehicle.make,
    model: Faker::Vehicle.model,
    description: Faker::Vehicle.standard_specs,
    year: Faker::Vehicle.year,
    mileage: Faker::Vehicle.mileage,
    highest_bid: rand(10000.00..20000.00).round(2),
    buy_now: rand(30000.00..50000.00).round(2),
    bidder: Faker::Name.name,
    seller_id: sellerIds.sample
  )
end

#sedding sold cars
3.times do
  SoldCar.create(
    image_url: "https://media.istockphoto.com/photos/illustration-of-generic-compact-white-car-front-side-view-picture-id1150931120?b=1&k=20&m=1150931120&s=612x612&w=0&h=y9F9VD231jV3hVKDJkOYkzgOpfbIzjk9JYkX8z7Ztpg=",
    make: Faker::Vehicle.make,
    model: Faker::Vehicle.model,
    description: Faker::Vehicle.standard_specs,
    year: Faker::Vehicle.year,
    mileage: Faker::Vehicle.mileage,
    sold_price: rand(30000.00..50000.00).round(2),
    buyer: Faker::Name.name,
    seller_id: sellerIds.sample
  )
end



puts "✅ Done seeding!"
