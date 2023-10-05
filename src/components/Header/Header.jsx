import './Header.css';
import logoSVG from '../../images/logo.svg';
import hamburger from '../../images/icon-hamburger.svg';

function Header() {
  return (
    <header className='header'>
      <nav className='nav'>       
        <img src={logoSVG} alt="Logo" className='logo'/>
        <img src={hamburger} alt='menu-hamburger' className='hamburger'/>
      </nav>
      <p className='header__text'>immersive experience that deliver</p>
    </header>
  )
}

export default Header