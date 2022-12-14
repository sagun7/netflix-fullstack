import React, { useState } from 'react'
import './navbar.scss'

import { NavLink } from 'react-router-dom';

import Search from '@mui/icons-material/Search';
import NotificationsNone from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll =() =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar' }>
        <div className="container">
            <div className="left">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
               
               <NavLink to="/" className='link'>
                <span> Home </span>
               </NavLink>
               
                
                <NavLink to="/series" className='link'>
                  <span> Series</span>
                </NavLink>
                
                <NavLink to="/movies" className='link'>
                  <span>Movies</span>
                </NavLink>
                
                <span> New and popular</span>
                <span> My List</span>

            </div>
            <div className="right">
                <Search className='icon' />
                <span>Kid</span>
                <NotificationsNone className='icon' />
                <img src="data:image/jpeg;base64,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" alt="" />
              
              <div className="profile">
                <ArrowDropDownIcon className='icon' />
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>

                </div>

              </div>
              



            </div>
        </div>
    </div>
  )
}

export default Navbar