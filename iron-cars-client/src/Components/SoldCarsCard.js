import React from 'react'
import { Card } from './Styles/Card.Styles'

function SoldCarsCard({make, model, desc, year, mileage, seller, image, soldPrice, buyer}) {
    return (
      <Card>
          <img src={image} alt="car"/>
          <h2>{year} {make} {model}</h2>
          <h5>Seller: {seller} / {mileage.toLocaleString("en-US")} miles</h5>
          <h4 className='desc'>{desc}</h4>
          <h1>Sold Price: ${soldPrice.toLocaleString("en-US")}</h1>
          <h5>Buyer: {buyer}</h5>
          <div className ="sold-out">Sold Out</div>
      </Card>
    )
  }


export default SoldCarsCard