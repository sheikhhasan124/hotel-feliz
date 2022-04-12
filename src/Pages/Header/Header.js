import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
     <nav className="navbar">
           <Link className='title' to="/">Hotel Feliz</Link>
         <div>
            <Link className='a'  to="/">Home</Link>
            <Link className='a'  to="/rooms">Room</Link>
            <Link className='a'  to="/service">Service</Link>
            <Link className='a'  to="/about">About</Link>
            <Link className='a'  to="/resister">Resister</Link>
         </div>
       
     </nav>
    );
};

export default Header;