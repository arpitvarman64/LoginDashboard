import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateComponent2() {
    const  auth = localStorage.getItem('user')

  return (
!auth ? <Outlet></Outlet>: < Navigate to ="/Home"/>
  )
}
