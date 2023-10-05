import './Header.css';
import logoSVG from '../../images/logo.svg';
import hamburger from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close.svg';
import { useState } from 'react';

function Header() {
  const [navOpen,setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(prevState => !prevState);
  }

  return (
    <header className='header'>
      <nav className='nav'>       
        <img src={logoSVG} alt="Logo" className='logo'/>
        <img src={!navOpen ? hamburger : close} alt='menu-hamburger' className='hamburger' onClick={handleClick}/>  
        <ul className={`header__nav ${!navOpen ? '': 'active'}`} >
          <li className="nav__item">About</li>
          <li className="nav__item">Careers</li>
          <li className="nav__item">Events</li>
          <li className="nav__item">Products</li>
          <li className="nav__item">Support</li>
        </ul>    
      </nav>
      <p className='header__text'>immersive experience that deliver</p>
    </header>
  )
}

export default Header