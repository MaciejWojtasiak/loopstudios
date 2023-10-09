import './Footer.css';
import logo from '../../images/logo.svg';
import facebook from '../../images/icon-facebook.svg';
import instagram from '../../images/icon-instagram.svg';
import pinterest from '../../images/icon-pinterest.svg';
import twitter from '../../images/icon-twitter.svg';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className='footer__logo'/>
      <nav className='footer__nav'>
        <li className="nav__item">About</li>
        <li className="nav__item">Careers</li>
        <li className="nav__item">Events</li>
        <li className="nav__item">Products</li>
        <li className="nav__item">Support</li>
      </nav>
      <div className="footer__socials">
        <li className="socials__item">
          <img src={facebook} alt="facebook" className='socials__icon'/>
        </li>    
        <li className="socials__item">
          <img src={instagram} alt="instagram" className='socials__icon'/>
        </li> 
        <li className="socials__item">
          <img src={pinterest} alt="pinterest" className='socials__icon'/>
        </li> 
        <li className="socials__item">
          <img src={twitter} alt="twitter" className='socials__icon'/>
        </li>   
      </div>
      <p className='copy'>&copy; 2023 Copyright Maciej Wojtasiak</p>
    </footer>
  )
}

export default Footer