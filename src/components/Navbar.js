import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const handleClick = () => {
    setExpandNavbar((prev) => !prev);
  }

const location = useLocation();
useEffect(() => {
  setExpandNavbar(false);
}, [location]);

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
          <button onClick={handleClick}>
            <ReorderIcon />
          </button>
        </div>
        <div className='links'>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/projects">Project</NavLink>                               
          <NavLink to="experience">Experience</NavLink>                               
          <NavLink to="contact">Contact</NavLink>                                                               
        </div>
    </div>
  )
}

export default Navbar