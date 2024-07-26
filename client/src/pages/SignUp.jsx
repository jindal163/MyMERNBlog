import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, Label, TextInput } from "flowbite-react";

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6'>
      {/* left side */}
      <div className='flex-1'>
      <Link to='/' className='  font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-br from-black via-purple-400 to-purple-950 
            text-white rounded-lg'>Jindal's</span>
            Blog
            </Link>
            <p className='text-sm mt-5'>
              This is a demo project. You can sign in with your email and password or with directly from Google.
            </p>
      </div>
      {/* right side */}
      <div className='flex-1'>
        <form className='flex flex-col gap-4'>
          <div>
            <Label value='Username' />
              <TextInput type='username' placeholder='Enter your username' id='username'/>
              </div>
              <div>
              <Label value='Email' />
              <TextInput type='email' placeholder='Enter your email' id='email'/>
              </div>
              <div>
              <Label value='Password' />
              <TextInput type='password' placeholder='Enter your password' id='password'/>
              </div>
              <Button gradientDuoTone='purpleToBlue' type='submit'>
                Sign Up
              </Button>
              </form>
              <div className='flex gap-2 text-sm mt-5'>
                <span>
                  Already have an account? 
                </span>
                <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
              </div>
           </div>
         </div>
     </div>
  )
}
