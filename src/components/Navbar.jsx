import React, { useState, useEffect, useRef } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import styles from '../style';

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navbarRef = useRef(null); // For Targetting Nav so that it will close when clicked outside.

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if(navbarRef.current && !navbarRef.current.contains(e.target) && toggleMenu) {
        settoggleMenu((prev) => !prev);
      }
    };
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    }
  }, [toggleMenu]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');

      if (window.pageYOffset >= navbar.offsetTop + navbar.offsetHeight) {
        setIsFixed(true);
        navbar.classList.add('fixed');
      } else {
        setIsFixed(false);
        navbar.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav id="navbar" ref={navbarRef} className={`${isFixed ? 'fixed bg-primary' : ''} ${styles.paddingX} z-[999] w-full flex py-6 justify-between`}>
      <img src={logo} alt="hooBank" className="w-[124px] h-[32px]" />

      {/* For Desktop or screens above 768px */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => (
          <li key={link.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} active:text-secondary`}>
            <a href={`#${link.id}`} className="hover:text-secondary hover:transition-all active:text-secondary">
              {link.title}
            </a>
          </li>
        ))}
      </ul>

  {/* For Mobile or screen below 768px, Min-width: 768px */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggleMenu ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer z-[99]" 
        onClick={() => settoggleMenu((prev) => !prev)}
        />

        {/* Menu */}
          <div className={`${toggleMenu ? 'flex' : 'hidden'} pt-[58px] bg-primary absolute top-0 right-0 min-w-[70%] h-screen sidebar`}>
          <ul className="list-none flex flex-col items-start pl-5 flex-1">
        {navLinks.map((link, index) => (
          <li key={link.id} className={`font-poppins font-normal cursor-pointer text-[18px] text-white  ${index === navLinks.length - 1 ? 'mb-0' : 'mb-10'}`} onClick={() => settoggleMenu((prev) => !prev)}>
            <a href={`#${link.id}`}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
          </div>
      </div>
    </nav>  
  )
}

export default Navbar;