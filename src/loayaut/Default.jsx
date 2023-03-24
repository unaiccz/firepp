import React from 'react'
import Nav from '../components/Nav'
// import outlet
import { Outlet } from 'react-router-dom'

const Default = () => {
  return (
    <div>
      <Nav/>
        <Outlet/>
        <hr />
    </div>
  )
}

export default Default
