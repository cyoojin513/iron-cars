import React from 'react'
import { Link } from 'react-router-dom'

function BidForm({cars}) {

  console.log(cars[0].id)

  return (
    <div>
      {/* <Link to={`/cars/${cars[0].id}/bid`} >This is a link</Link>
      <h3>The ID is currently {cars.id}</h3> */}
    </div>
  )
}


export default BidForm

// id, make, model, desc, year, highestBid, mileage, seller, image, buyNow, bidder