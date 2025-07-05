import greekSalad from '../assets/Greek-Salad.webp';
import bruschetta from '../assets/bruschetta.jpg';
import lemonDessert from '../assets/lemon-dessert.jpg';

function Specials() {
  const items = [
    { name: "Greek Salad", price: "$12.99", description: "Crispy lettuce, peppers, olives and feta cheese.", image: greekSalad },
    { name: "Bruschetta", price: "$5.99", description: "Grilled bread garlic, tomatoes, olive oil.", image: bruschetta },
    { name: "Lemon Dessert", price: "$4.99", description: "Fresh baked lemon cake with whipped cream.", image: lemonDessert },
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week's Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className="specials-grid">
        {items.map((item, index) => (
          <div className="special-card" key={index}>
            <img src={item.image} alt={item.name} height={300}/>
            <h3>{item.name} <span>{item.price}</span></h3>
            <p>{item.description}</p>
            <a href="#">Order a delivery</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;