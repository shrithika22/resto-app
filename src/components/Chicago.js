import chef from '../assets/chef.jpg';

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
        <img src={chef} alt="Adrian" />
        <img src={chef} alt="Mario" />
      </div>
    </section>
  );
}

export default Chicago;