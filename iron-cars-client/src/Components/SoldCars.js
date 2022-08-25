import React from 'react'
import SoldCarsCard from './SoldCarsCard'
import { ContentGrid, ContentInCenterColumn } from './Styles/PageGrid.Style'
import { Header } from './Styles/Header.Styles'

function SoldCars({soldCars}) {

  return (
  <div>
    <Header>
      <h1>SOLD VEHICLES</h1>
    </Header>
    <ContentInCenterColumn>
      <ContentGrid>
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
        </ContentGrid>
      </ContentInCenterColumn>
    </div>
  )
}

export default SoldCars

// make, model, desc, year, mileage, seller, image, buyNow, buyer