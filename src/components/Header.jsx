import React from 'react'

const Header = () => {
  return (
   <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="favorites">Favorites</Link>
    </nav>
   </header>
  )
}

export default Header;