import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Styles/Card.Styles'

function HomeCard({make, model, desc, year, highestBid, mileage, seller, image, buyNow, bidder, id}) {
  
  return (
    <Card>
      <img src={image} alt="car"/>
      <h2>{year} {make} {model}</h2>
      <h5>Seller: {seller} / {mileage.toLocaleString("en-US")} miles</h5>
      <h4 className='desc'>{desc}</h4>
      <h1>${highestBid.toLocaleString("en-US")}</h1>
      {/* <h5>Highest Bid</h5> */}
      {/* <h4 className='miles-buy-now'>{mileage.toLocaleString("en-US")} miles</h4> */}
      <h3 className='buy-now'>Buy Now <br></br>${buyNow.toLocaleString("en-US")}</h3>
      {/* <h4>Bid Leader: {bidder}</h4> */}
      <Link className='link' to={`/cars/${id}/bid`}>Bid / Buy</Link>
    </Card>
  )
}

export default HomeCard

