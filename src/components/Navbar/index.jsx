import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Header, Nav } from './style'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick=()=>{setIsOpen(!isOpen)}
  return (
      <Header>
          <div className='logo'>
              <a href="
              #">Boots<span>Land.</span></a>
          </div>
          <Nav>
              <ul className={isOpen ? "nav-menu active":"nav-menu"}>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  
                  <li><a href="#service">Service</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </Nav>
          <div className='toggle' onClick={handleClick}>
              {isOpen ? <FaTimes/> : <FaBars />}
          </div>
    </Header>
  )
}

export default Navbar