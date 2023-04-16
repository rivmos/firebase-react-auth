import React, { useState } from 'react'
import { auth } from '../firebase'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { HashLoader } from 'react-spinners'


const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()


    const signIn = (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(credentials => {
                console.log(credentials);
                navigate('/dashboard')
                setLoading(false)
            })
            .catch(error => {
                console.table(error)
                setLoading(false)
                setError(error.code)
            })
    }


    return (
        <div className='flex flex-col justify-center items-center h-screen w-screen'>
            {error && <span className='text-[tomato]'>{error}</span>}
            <div className='p-10 bg-lightBlue rounded-xl relative'>
                <h4 className='mb-6'>Sign In</h4>
                {loading && <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'><HashLoader color='#FFAFCC' loading={loading} /></span>}
                {loading && <div className='absolute w-full h-full bg-[#000] opacity-10 rounded-md top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'></div>}
                <form>
                    <input type='email' value={email} placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }} className='p-1.5 rounded-md outline-none mb-4' />
                    <br />
                    <input type='password' value={password} placeholder='Enter Password' onChange={(e) => { setPassword(e.target.value) }} className='p-1.5 rounded-md outline-none' />
                    <br />
                    <button className='mt-5 p-2 rounded-md bg-darkPink hover:bg-lightPink transition-all duration-500 ' onClick={signIn}>Submit</button>
                </form>
            </div>
            <div className='flex gap-2'>
                <span>Don't have an account?</span>
                <Link to='/signup' className='hover:text-darkPink text-darkBlue duration-500'>Sign Up</Link>
            </div>
        </div>
    )
}

export default SignIn