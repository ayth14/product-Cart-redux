import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='bg-green-400 text-white font-semibold h-10 flex items-center justify-between'>
        <span className='px-4 '>Redux Store</span>

        <div className="flex">
            <Link to={'/'} className="px-4">Home</Link>
            <Link to={'/cart'} className="px-4">Cart</Link>
        </div>
    </nav>
  )
}

export default Navbar