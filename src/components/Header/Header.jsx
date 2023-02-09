import React from 'react';
import classes from './Header.module.css';


const Header = () => {
  return (
    <header className={classes.header}>
      <img className='photo' src='https://images.freeimages.com/images/previews/09e/moon-art-1641879.png' alt='logo'/>
    </header>
  );
}

export default Header;