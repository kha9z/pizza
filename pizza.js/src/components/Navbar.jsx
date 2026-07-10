import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Pizza.js</h2>

      <div>
        <Link to="/">Hem</Link>
        <Link to="/menu">Meny</Link>
      </div>
    </nav>
  );
}

export default Navbar;