import React from 'react'
import HomeCard from './HomeCard'


function Home({cars}) {
  return (
    <div>
       {cars.map((car) => <HomeCard
        key = {car.id}
        id = {car.id}
        make = {car.make}
        model = {car.model}
        desc = {car.description}
        year = {car.year}
        highestBid = {car.highest_bid}
        mileage = {car.mileage}
        seller = {car.seller.name}
        buyNow = {car.buy_now}
        image = {car.image_url}
        bidder = {car.bidder}
       />)}
    </div>
  )
}

export default Home
