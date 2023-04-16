import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { getAuth } from '@firebase/auth'


const PrivateRoute = ({ children }) => {

    const {currentUser} = getAuth()
    console.log(currentUser)

    return currentUser ? <Outlet/> : <Navigate to='/signin' />
}

export default PrivateRoute