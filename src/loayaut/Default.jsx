import React from 'react'
import Nav from '../components/Nav'
import { useUser } from '../context/UserContext'
import { Outlet } from 'react-router-dom'

const Default = () => {
  const {user} = useUser()
  console.log(user)
  return (
    <div>
      <Nav/>
        <Outlet/>
        <hr />
    </div>
  )
}

export default Default
