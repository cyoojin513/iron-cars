import React from 'react'

function HomeCard({make, model, desc, year, highestBid, mileage, seller, image, buyNow, bidder}) {
  return (
    <div>
        <img src={image} alt="car"/>
        <h3>Make: {make}</h3>
        <h3>Model: {model}</h3>
        <h4>Description: {desc}</h4>
        <h4>Year: {year}</h4>
        <h4>Highest Bid: ${highestBid.toLocaleString("en-US")}</h4>
        <h4>Mileage: {mileage.toLocaleString("en-US")} miles</h4>
        <h4>Buy Now: ${buyNow.toLocaleString("en-US")}</h4>
        <h4>Bid Leader: {bidder}</h4>
        <h4>Seller: {seller}</h4>
    </div>
  )
}

export default HomeCard


// key = {car.id}
// make = {car.make}
// model = {car.model}
// desc = {car.description}
// year = {car.year}
// highestBid = {car.highest_bid}
// mileage = {car.mileage}
// seller = {car.seller.name}