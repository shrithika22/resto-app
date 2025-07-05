import customer from '../assets/Customer.png';

function CustomersSay() {
  const testimonials = [
    { name: "Andrea L.", rating: 5, text: "Absolutely loved the food and atmosphere!", photo: customer },
    { name: "Michael R.", rating: 4, text: "Great place, will visit again!", photo: customer },
    { name: "Lucy W.", rating: 5, text: "Amazing desserts and wonderful staff!", photo: customer },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="stars">{'⭐'.repeat(t.rating)}</div>
            <img src={t.photo} alt={t.name} />
            <h4>{t.name}</h4>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;