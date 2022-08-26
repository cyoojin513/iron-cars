import React from 'react'
import {NavLink} from 'react-router-dom'
// Styling
import { NavGrid } from './Styles/PageGrid.Style'
import ironLogo from '../Images/ironLogo.png'
import { NavigationStyles } from './Styles/Nav.Styles'
import { Logo } from './Styles/Nav.Styles'

function NavBar() {
  return (
    <NavigationStyles>  
        <NavGrid>
          <Logo as={NavLink} exact to ='/'>
            <img src={ironLogo} alt="Iron Logo"/>
          </Logo>
          <NavLink exact to = "/">Home</NavLink>
          <NavLink exact to = "/sell">Sell</NavLink>
          <NavLink exact to = "/sold-cars">Sold Cars</NavLink>
            <NavLink className ="about" exact to ="/about">About</NavLink>
        </NavGrid>
      </NavigationStyles>
  )
}

export default NavBar