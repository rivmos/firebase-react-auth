import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  
  return (
      <div className='flex flex-col items-center p-6 h-screen justify-center'>
        <h2>Welcome</h2>
        <div className='flex justify-center gap-4'>
          <Link to='/signin' className='mt-5 p-2 rounded-md bg-darkPink hover:bg-lightBlue transition-all duration-500'>Login</Link>
          <Link to='/signup' className='mt-5 p-2 rounded-md bg-darkPink hover:bg-lightBlue transition-all duration-500'>Register</Link>
        </div>
      </div>
    )
}

export default App