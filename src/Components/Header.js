import React from 'react'
// import MenuIcon from '@mui/icons-material/Menu';
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = () => {
  return (
    <div className='header'>
        <nav className='navbar'>
                <div className='nav-left'>
                    <h1>
                        Image Bazaar
                    </h1>
                </div>
                <div className='nav-center'>
                    <p><a href="#">HOME</a></p>
                    <p><a href="#">ABOUT</a></p>
                    <p><a href="#">BLOG</a></p>
                    <p><a href="#">CONTACT US</a></p>
                </div>
                <div className="nav-right">
                    <a href='#'><DarkModeIcon /></a>
                    <a href='#'><SearchSharpIcon /></a>
                    <a href='#'><Person2SharpIcon /></a>
                </div>
            </nav>
    </div>
  )
}

export default Header