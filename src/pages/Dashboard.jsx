import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
const Dashboard = () => {
  const user = useUser();
  return (
    <div>
      <h3>Welcome user</h3>
    </div>
  )
}

export default Dashboard
