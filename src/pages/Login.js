import React, { useState } from 'react'
import { RiUser3Line } from "react-icons/ri"
import { AiOutlineLock } from "react-icons/ai"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Login({SetUsername}) {
  const navigate = useNavigate()
  
  function HandleSubmit(e) {
    e.preventDefault()
    navigate('/home')
  }

  return (
    <form onSubmit={(e) => HandleSubmit(e)} className='h-screen gap-5 flex flex-col overflow-hidden items-center bg-blue-700 justify-center'>
      <div className="relative flex flex-row items-center justify-center gap-3">
        <RiUser3Line fill='white' className='absolute left-3' size={20}/>
        <input onChange={(e) => SetUsername(e.target.value)} required type="text" placeholder='USERNAME' className='bg-transparent border rounded-md font-thin pl-10 pr-5 pt-2 pb-2 outline-none text-white text-md'/>
      </div>
      <div className="relative flex flex-row items-center justify-center gap-3">
        <AiOutlineLock fill='white' className='absolute left-3' size={20}/>
        <input required type="password" placeholder='PASSWORD' className='bg-transparent border rounded-md font-thin pl-10 pr-5 pt-2 pb-2 outline-none text-white text-md'/>
      </div>
      <Button type='submit' variant='contained' className='w-[100px]'>Log In</Button>
    </form>
  )
}

export default Login