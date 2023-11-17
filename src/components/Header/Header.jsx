import React from 'react'
import "./Header.css"

function Header() {
  return (
    <header  className="header">
        <nav>
            <ul>
                <li><a href="#home" class="active">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header


//remove dots from css li?