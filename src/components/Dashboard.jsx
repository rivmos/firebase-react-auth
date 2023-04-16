import React from 'react'
import { getAuth } from '@firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router'

const Dashboard = () => {
    // const {currentUser} = getAuth()
    const navigate = useNavigate()

    const signOut = () => {
        auth.signOut().then(res => {
            console.log(res)
            navigate('/')
        })
    }

    return (
        <div className='flex flex-col justify-center items-center h-screen w-screen'>
            <div className='p-10 bg-lightBlue rounded-xl text-center'>
                <h4 className='mb-6'>Hello World</h4>
                {/* <h4 className='mb-6'>{currentUser?.email}</h4> */}
                <button className='bg-lightPink hover:bg-darkPink duration-500 p-1.5 rounded-md' onClick={signOut}>Sign Out</button>
            </div>
        </div>
    )
}

export default Dashboard