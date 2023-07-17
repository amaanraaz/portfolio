import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className='flex justify-between bg-slate-700 w-full p-2'>
        <img src={logo} alt='logo' className='w-28 h-12'></img>
        <ul className='flex justify-between'>
            <li className='mx-5'>Home</li>
            <li className='mx-5'>About Me</li>
            <li className='mx-5'>Projects</li>
            <li className='mx-5'>Connect</li>
        </ul>
    </div>
  )
}

export default Navbar