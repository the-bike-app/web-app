import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <NavLink to='/bikes'>Bikes</NavLink>
    <NavLink to='/create'>Create Bike</NavLink>
  </nav>
)

export default Nav