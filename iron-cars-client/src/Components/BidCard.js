import React from 'react'
import { BiddingCard } from './Styles/Card.Styles'

function BidCard({car, purchaseCar}) {

  return (
    <BiddingCard>
        <img src={car.image_url} alt="car"/>
        <h2>{car.year} {car.make} {car.model}</h2>
        <h5>Seller: {car.seller == undefined ? null : car.seller.name}</h5>
        <h4 className='desc'> {car.description}</h4>
        <h1>${car.highest_bid}</h1>
        <h5>Bid Leader: {car.bidder}</h5>
        <p onClick={purchaseCar} className='buy-now'>Buy Now: ${car.buy_now}</p>
    </BiddingCard>
  )
}

export default BidCard
