import React from 'react'

function BidCard({car}) {

  return (
    <div>
        <img src={car.image_url} alt="car"/>
        <h3>Make: {car.make}</h3>
        <h3>Model: {car.model}</h3>
        <h4>Description: {car.description}</h4>
        <h4>Year: {car.year}</h4>
        <h4>Highest Bid: ${car.highest_bid}</h4>
        <h4>Mileage: {car.mileage} miles</h4>
        <h4>Buy Now: ${car.buy_now}</h4>
        <h4>Bid Leader: {car.bidder}</h4>
        <h4>Seller: {car.seller == undefined ? null : car.seller.name}</h4>
    </div>
  )
}

export default BidCard
