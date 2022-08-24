import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <NavLink exact to = "/">Home</NavLink>
        <NavLink exact to = "/sell">Sell</NavLink>
        <NavLink exact to = "/sold-cars">Sold Cars</NavLink>

    </div>
  )
}

export default NavBar