import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import BidCard from './BidCard'

function BidForm({cars}) {
  let {id} = useParams()

  const car = cars[id-1]

  const [formData, setFormData] = useState({bidder: "", new_bid: 0})

  function handleNewBidder(e) {
    setFormData({...formData, bidder: e.target.value,})
  }

  function handleNewBid(e) {
    setFormData({...formData, new_bid: parseFloat(e.target.value).toFixed(2)})
    console.log(typeof formData.new_bid)
  }


  function handlePatch() {
    fetch(`http://localhost:9292/cars/${id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(formData)
    }).then(r=>r.json())
      .then(patchedInfo => console.log(patchedInfo))
  }

  function handleSubmit() {
    parseFloat(formData.new_bid) > car.highest_bid ? handlePatch() : alert("Please enter higher bid")
  }

  return (
    <div>
      <BidCard car={car}/>
      <form onSubmit={handleSubmit}>
        <label htmlFor='buyer'></label>
          <input type='text' name='bidder' placeholder='your name' onChange={handleNewBidder}/>
        <label htmlFor='price'></label>
          <input type='float' name='new_bid' placeholder='bid price' onChange={handleNewBid}/>
        <input type='submit'/>
      </form>
      <button>Buy now!</button>
    </div>
  )
}

export default BidForm