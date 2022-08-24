import React from 'react'
import {NavLink} from 'react-router-dom'
// Styling
import { NavGrid } from './Styles/PageGrid.Style'

function NavBar() {
  return (
      <NavGrid>
        <p>LOGO IMAGE HERE</p>
        <NavLink exact to = "/">Home</NavLink>
        <NavLink exact to = "/sell">Sell</NavLink>
        <NavLink exact to = "/sold-cars">Sold Cars</NavLink>
        <NavLink exact to ="/about">About</NavLink>
      </NavGrid>
  )
}

export default NavBar