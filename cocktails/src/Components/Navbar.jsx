import React from 'react'
import Logo from '../Logo.svg'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <Link to="/">
                <img src = {Logo} alt="cocktail db logo" className='logo' />
            </Link>
            <ul className='nav-links'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link> 
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
