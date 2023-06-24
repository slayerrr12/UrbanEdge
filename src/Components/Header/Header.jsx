import React from 'react';
import { Link } from 'react-router-dom';




import './Header.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src='crown.svg'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      <Link className='option' to='/login'>
        LOGIN
      </Link>
    </div>
  </div>
);

export default Header;