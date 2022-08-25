import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import BidCard from './BidCard'
import { Header } from './Styles/Header.Styles'
import { BidCardInCenterColum, BidGrid } from './Styles/PageGrid.Style'
import { BidInput } from './Styles/BidInput.Styles'

function BidForm({fetchAllCars, fetchSoldCars}) {
  let {id} = useParams()
  let history = useHistory()

  const [car, setCar] = useState({})

  function fetchBiddedCar() {
    fetch(`http://localhost:9292/cars/${id}`)
      .then((response) => response.json())
      .then((carForSale) => setCar(carForSale))
  }
  useEffect(()=> fetchBiddedCar(),[])

  const [formData, setFormData] = useState({bidder: "", new_bid: 0, id: id})

  function handleNewBidder(e) {
    setFormData({...formData, bidder: e.target.value,})
  }

  function handleNewBid(e) {
    setFormData({...formData, new_bid: parseFloat(e.target.value).toFixed(2)})
  }

  // App re-renders with this state change
  // Then change state at BidForm
  function handlePatch() {
    alert("Thank you for your bid")
    fetch(`http://localhost:9292/cars/${id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(formData)
    }).then(r=>r.json())
      .then(() => fetchAllCars())
      .then(() => fetchBiddedCar())
  }

  function handleSubmit(e) {
    e.preventDefault()
    parseFloat(formData.new_bid) > car.buy_now ? alert("Bid too high, click Buy Now to purchase.") : checkBidHigherThanCurrentBid()
    e.target.reset()
  }

  function checkBidHigherThanCurrentBid(){
    parseFloat(formData.new_bid) > car.highest_bid ? handlePatch() : alert("Please enter higher bid") 
  }
  

  function purchaseCar(){
    alert("Thank you for your purchase")
    fetch("http://localhost:9292/sold-cars", {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({
        make: car.make,
        model: car.model,
        mileage: car.mileage,
        buy_now: car.buy_now,
        buyer_name: formData.bidder,
        description: car.description,
        image_url: car.image_url,
        year: car.year,
        seller_name: car.seller.name
      })
    })
    .then(r=>r.json())
    .then( () => fetchSoldCars())

    fetch(`http://localhost:9292/cars/${id}`, {
      method: 'DELETE',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({id: formData.id})
    }).then(r=>r.json())
      .then(() => fetchAllCars() )
      .then(() => history.push("/"))

  }

  return (
    <div>
      <Header>
        <h1>PLACE A BID OR PURCHASE</h1>
      </Header>
      <BidCardInCenterColum>
        <BidGrid>
          {car == {} ? null : <BidCard car={car} purchaseCar={purchaseCar}/>}
          <BidInput>
            <form onSubmit={handleSubmit}>
              <label htmlFor='buyer'></label>
                <input type='text' name='bidder' placeholder='Your Name' onChange={handleNewBidder}/>
              <label htmlFor='price'></label>
                <input type='float' name='new_bid' placeholder='Enter Bid' onChange={handleNewBid}/>
              <input type='submit'/>
            </form>
            {/* <button onClick={purchaseCar}>Buy now!</button> */}
          </BidInput>
        </BidGrid>
      </BidCardInCenterColum>
    </div>
  )
}

export default BidForm