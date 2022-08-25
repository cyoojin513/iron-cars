import React, { useState } from 'react'
import { Header } from './Styles/Header.Styles'
import { SellGrid } from './Styles/Selling.Styles'
import { SellFormInCenterColumn } from './Styles/PageGrid.Style'

function Selling({addingNewCar}) {
  const [carData, setCarData] = useState({
    name: "", image: "", make: "", model: "", year: null, description: "", mileage: null, price: null 
  }) 

  function handleChange(e) {
    setCarData({...carData, [e.target.name]: e.target.value})
  }

  function handleSubmit(event){
    event.preventDefault()
    fetch("http://localhost:9292/sellers", {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({seller_name: carData.name})
    })
    .then(r=>r.json())
    .then( (addedSeller) => console.log(addedSeller) )

    setTimeout(() => {
      fetch("http://localhost:9292/cars", {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify({
          make: carData.make,
          model: carData.model,
          year: parseInt(carData.year),
          mileage: parseInt(carData.mileage),
          buy_now: parseFloat(carData.price).toFixed(2),
          seller_name: carData.name,
          description: carData.description,
          image_url: carData.image
        })
      }).then(r=>r.json())
        .then((newCar) => {
          console.log(newCar)
          addingNewCar()})
    }, "1000")

    event.target.reset()
  }

  return (
    <div>
      <Header>
        <h1>LIST YOUR VEHICLE</h1>
      </Header>
      <SellFormInCenterColumn>
        <SellGrid>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>
              <input type='text' name='name' placeholder='First Name and Last Name' onChange={handleChange}/>
            </label>
            <label htmlFor='image'>
              <input type='text' name='image' placeholder='Image Url' onChange={handleChange}/>
            </label>
            <label htmlFor='make'>
              <input type='text' name='make' placeholder='Make of the Vehicle' onChange={handleChange}/>
            </label>
            <label htmlFor='model'>
              <input type='text' name='model' placeholder='Model of the Vehicle' onChange={handleChange}/>
            </label>
            <label htmlFor='year'>
              <input type='number' name='year' placeholder='Year of the Vehicle' onChange={handleChange}/>
            </label>
            <label htmlFor='description'>
              <input type='text' name='description' placeholder='Description' onChange={handleChange}/>
            </label>
            <label htmlFor='mileage'>
              <input type='number' name='mileage' placeholder='Mileage' onChange={handleChange}/>
            </label>
            <label htmlFor='price'>
              <input type='float' name='price' placeholder='Purchase Price' onChange={handleChange}/>
            </label>
            <input type='submit'/>
          </form>
        </SellGrid>
      </SellFormInCenterColumn>
    </div>
  )
}

export default Selling