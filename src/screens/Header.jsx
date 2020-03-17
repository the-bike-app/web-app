import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Navbar from '../components/shared/Navbar.jsx'
import BurgerNav from './BurgerNav'


const Header = ({ user }) => {
  const authenticatedOptions = (
    <div className="links">
      {user && <NavLink to={`/users/${user._id}/bikes`}>{user.username}'s Bikes</NavLink>}
      <NavLink to="/change-password">Change Password</NavLink>
      <NavLink to="/sign-out">Sign Out</NavLink>
    </div>
  )

  const unauthenticatedOptions = (
    <div className="links">
      {/* <NavLink to="/">Home</NavLink> */}

      

      <NavLink to="/sign-in">Sign In</NavLink>
      </div>
  )

  const alwaysOptions = (
    <>
    
    <div className="links">
      <NavLink to='/Browse'>Browse</NavLink>
    </div>
    </>
  )


  return (<Navbar>
    <div className="nav">
      <div className ='navLogo'>
        <NavLink to='/'>
          <img src='https://i.imgur.com/YI3Pdn9.png' alt='Wheel Deal'/>
        </NavLink>
      </div>
      <div className= 'leftNav'> 
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
      <div className = 'burgerNav'>
        <BurgerNav user={user}
          authenticatedOptions={authenticatedOptions}
          unauthenticatedOptions={unauthenticatedOptions} 
          alwaysOptions={alwaysOptions}/>
      </div>
      
    </div>
  </Navbar>
  )
}



export default Header