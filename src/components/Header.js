import React from 'react'
import './Header.css'

const Header = ({ children }) => {
  return (
    <header>
      <h1 className='header-title'>{children}</h1>
    </header>
  )
}

export default Header