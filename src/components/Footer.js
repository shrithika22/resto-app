

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f0f0f0' }}>
        <img src={logo} alt="Little Lemon Logo" />
        <nav>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            {/* Add li for Reseravations, Order Online, Login */}
            </ul>
        </nav>
        <div>
            {/* Contact details */}
            <p>Contact us:</p>
            <p>123 Main Street, Anytown</p>
            <p>Phone: 555-123-4567</p>
            {/* Add email  */}
        </div>
        <div>
            {/* Social media links */}
            <p>Follow us:</p>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
        </div>
    </footer>
  );
}

export default Footer;