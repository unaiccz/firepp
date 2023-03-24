import React from 'react'
//import navlionk
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <NavLink to="/" className="navbar-brand">Home</NavLink>
        <NavLink to="/dashboard" className="navbar-brand">Dashboard</NavLink>
      </nav>
    </div>
  )
}

export default Nav
