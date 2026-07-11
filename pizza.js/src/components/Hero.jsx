import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Pizzor gjorda med Javascript</h1>

        <p>
          Pizza pizza
        </p>

        <Link to="/menu" className="hero-btn">
          Se menyn
        </Link>
      </div>
    </section>
  );
}

export default Hero;