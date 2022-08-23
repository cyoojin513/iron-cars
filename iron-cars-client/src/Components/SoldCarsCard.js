import React from 'react'

function SoldCarsCard({make, model, desc, year, mileage, seller, image, soldPrice, buyer}) {
    return (
      <div>
          <img src={image} alt="car"/>
          <h3>Make: {make}</h3>
          <h3>Model: {model}</h3>
          <h4>Description: {desc}</h4>
          <h4>Year: {year}</h4>
          <h4>Mileage: {mileage.toLocaleString("en-US")} miles</h4>
          <h4>Sold Price: ${soldPrice.toLocaleString("en-US")}</h4>
          <h4>Buyer: {buyer}</h4>
          <h4>Seller: {seller}</h4>
      </div>
    )
  }


export default SoldCarsCard