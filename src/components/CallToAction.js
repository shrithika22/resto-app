import headerFood from '../assets/header.png';

function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={headerFood} alt="Little Lemon Restaurant" />
      </div>
    </section>
  );
}

export default CallToAction;