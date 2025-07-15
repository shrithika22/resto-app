// import { Link } from 'react-router-dom';
// import logo from '../assets/Logo.svg';

// function Nav() {
  
//   return (
//     <nav >
//         <img
//           src={logo}
//           alt="Little Lemon logo"
//           className="nav-image"
//         ></img>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/menu">Menu</Link></li>
//         <li><Link to="/booking">Reservations</Link></li>
//         <li><Link to="/order-online">Order Online</Link></li>
//         <li><Link to="/login">Login</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Nav;


import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <img src={logo} alt="Little Lemon logo" className="nav-image" />

        <button className="burger" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/order-online">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;