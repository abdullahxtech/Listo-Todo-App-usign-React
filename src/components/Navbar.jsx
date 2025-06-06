import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between p-3 text-white bg-purple-400 items-center'>
        <h1 className='font-bold text-3xl'>Listo</h1>
        <ul className='flex gap-5 text-xl justify-center items-center'>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
