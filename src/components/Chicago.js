import chef1 from '../assets/chef.webp';
import chef2 from '../assets/chef1.png';

function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is owned by Adrian and Mario, two passionate chefs who
          bring traditional Mediterranean flavors to life in a cozy setting.
        </p>
      </div>
      <div className="chicago-images">
        <img src={chef1} alt="Adrian" />
        <img src={chef2} alt="Mario" />
      </div>
    </section>
  );
}

export default Chicago;