
import headerFood from '../assets/header.png';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.......
        </p>
        <Link className="action-button" to="/booking">Reserve a table</Link>
        <Link className="action-button" to="/booking">Reserve a table</Link>
      </div>
      <div className="hero-image">
        <img src={headerFood} alt="Restaurant hero" />
      </div>
    </header>
  );
}

  export default Header;