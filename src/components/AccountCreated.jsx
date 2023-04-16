import React from 'react'
import { Link } from 'react-router-dom'

const AccountCreated = () => {

    return (
        <div className='flex flex-col justify-center items-center h-screen w-screen'>
            <div className='p-10 bg-lightBlue rounded-xl text-center'>
                <h4 className='mb-6'>Account Created Successfully</h4>
                <Link to='/signin' className='bg-lightPink hover:bg-darkPink duration-500 p-1.5 rounded-md'>Sign In</Link>
            </div>
        </div>
    )
}

export default AccountCreated