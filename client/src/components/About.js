import About1 from '../assets/About-logo.png';
import About2 from '../assets/Interior.png'; // Add a second image for the overlap

export default function About() {
  return (
    <article className="about-us">
      <section className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="about-subtext">
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
          Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
          and were inspired to bring the flavors of their hometown in Italy to the people of Chicago.
          The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.
        </p>
      </section>

      <section className="about-images">
        <img className="about-1" src={About1} alt="Little Lemon restaurant" />
        <img className="about-2" src={About2} alt="Little Lemon interior" />
      </section>
    </article>
  );
}