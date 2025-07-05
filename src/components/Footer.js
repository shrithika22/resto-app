import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f0f0f0' }}>
        <img src={logo} alt="Little Lemon Logo" />
        <nav>
            <ul>
            {/* <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li> */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/order-online">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
        <div>
            {/* Contact details */}
            <p>Contact us:</p>
            <p>123 Main Street, Anytown</p>
            <p>Phone: 555-123-4567</p>
            <p>Email: info@littlelemon.com</p>
        </div>
        <div>
            {/* Social media links */}
            <p>Follow us:</p>
            <a href="https://www.google.com/">Facebook</a>
            <a href="https://www.google.com/">Twitter</a>
            <a href="https://www.google.com/">Instagram</a>
        </div>
    </footer>
  );
}

export default Footer;