import './Header.css';
import logoSVG from '../../images/logo.svg';
import hamburger from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close.svg';
import { useState, useEffect } from 'react';
import {motion} from 'framer-motion';

const variants = {
  active: {
    transition:{
      staggerChildren:0.1,
    },
  },
  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection:-1,
    },
  },
}

const itemVariants = {
  active: {
    y:0,
    opacity:1,
  },
  closed: {
    y:50,
    opacity:0,
  }
}

function Header() {
  const [navOpen,setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(prevState => !prevState);
  }

  useEffect(()=>{
    navOpen ? document.body.style.overflow = 'hidden' :document.body.style.overflow = 'unset';
  },[navOpen])

  const linkItems = ["About", "Careers", "Events", "Products", "Support"]

  return (
    <header className='header'>
      <nav className='nav'>       
        <img src={logoSVG} alt="Logo" className='logo'/>
        <img src={!navOpen ? hamburger : close} alt='menu-hamburger' className='hamburger' onClick={handleClick}/>  
        <motion.ul className={`header__nav header__nav--mobile ${!navOpen ? 'closed': 'active'}`} animate={navOpen? "active": "closed"} variants={variants}>
          {linkItems.map((item)=>(
            <motion.li className='nav__item' key={item} variants={itemVariants}><a href='#'>{item}</a></motion.li>
          ))}
        </motion.ul>   

         <ul className={`header__nav header__nav--desktop`} >
         {linkItems.map((item)=>(
            <li className='nav__item' key={item}><a href='#'>{item}</a></li>
          ))}
        </ul>  
      </nav>
      <motion.p initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{delay:.5}} className='header__text'>immersive experiences that deliver</motion.p>
    </header>
  )
}

export default Header