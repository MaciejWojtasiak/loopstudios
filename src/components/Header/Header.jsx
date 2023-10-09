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
        <ul className={`header__nav header__nav--mobile ${!navOpen ? '': 'active'}`} >
        <li className="nav__item"><a href='#'>About</a></li>
        <li className="nav__item"><a href="#">Careers</a></li>
        <li className="nav__item"><a href="#">Events</a></li>
        <li className="nav__item"><a href="#">Products</a></li>
        <li className="nav__item"><a href="#">Support</a></li>
        </ul>   

         <ul className={`header__nav header__nav--desktop`} >
         <li className="nav__item"><a href='#'>About</a></li>
        <li className="nav__item"><a href="#">Careers</a></li>
        <li className="nav__item"><a href="#">Events</a></li>
        <li className="nav__item"><a href="#">Products</a></li>
        <li className="nav__item"><a href="#">Support</a></li>
        </ul>  
      </nav>
      <p className='header__text'>immersive experiences that deliver</p>
    </header>
  )
}

export default Header