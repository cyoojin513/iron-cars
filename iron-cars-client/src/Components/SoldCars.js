import React from 'react'
import SoldCarsCard from './SoldCarsCard'

function SoldCars({soldCars}) {

  return (
    <div>
        {soldCars.map((soldCar) => <SoldCarsCard
            key = {soldCar.id}
            make = {soldCar.make}
            model = {soldCar.model}
            desc = {soldCar.description}
            year = {soldCar.year}
            mileage = {soldCar.mileage}
            seller = {soldCar.seller.name}
            image = {soldCar.image_url}
            soldPrice = {soldCar.sold_price}
            buyer = {soldCar.buyer}
        />)}
    </div>
  )
}

export default SoldCars

// make, model, desc, year, mileage, seller, image, buyNow, buyer