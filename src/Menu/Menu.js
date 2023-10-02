import React from 'react';

import { Link }  from "react-router-dom";

function Menu() {
  return (
    <nav className='menu'>
      <div>
        <ul>
          <li><Link itemProp="url" to="/">Home</Link></li> 
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li> 
        </ul>
      </div>
    </nav>
  );
}

export default Menu;