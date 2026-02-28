import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from "../../assets/mainlogo.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
      <div className="container">
        <img src={logo} alt="Logo" className='logo' />
        
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to='hero' smooth={true} offset={-50} duration={500}>Home</Link></li>
          <li>
  <Link 
    to="divisions" 
    smooth={true} 
    offset={-80} 
    duration={500}
    onClick={() => setMenuOpen(false)}
  >
    Program
  </Link>
</li>
          <li><Link to='about' smooth={true} offset={-50} duration={500}>About us</Link></li>
          <li><Link to='campus' smooth={true} offset={-50} duration={500}>Campus</Link></li>
          <li><Link to='testimonial' smooth={true} offset={-50} duration={500}>Testimonial</Link></li>
          {/* <li><Link to='attandence' smooth={true} offset={-50} duration={500}>Attendance</Link></li> */}
          <li>
  <Link
    to="contact"
    smooth={true}
    offset={-80}
    duration={500}
    className="btn"
    onClick={() => setMenuOpen(false)}
  >
    Contact us
  </Link>
</li>
        </ul>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
