import React from 'react'
import { Link } from 'react-router-dom'

function HomeCard({make, model, desc, year, highestBid, mileage, seller, image, buyNow, bidder, id}) {
  
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
        <Link to={`/cars/${id}/bid`}>Bid / Buy</Link>
    </div>
  )
}

export default HomeCard

