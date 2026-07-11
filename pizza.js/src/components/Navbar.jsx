import { Link } from "react-router-dom";
import useStore from "../store/useStore";
import logo from "../assets/logo.png";

function Navbar() {
  const cart = useStore((state) => state.cart);

  const total = cart.reduce(
    (sum, pizza) => sum + pizza.price,
    0
  );

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Pizza.js logo" />
      </Link>

      <nav>
        <Link to="/">Hem</Link>
        <Link to="/menu">Meny</Link>

        <span className="cart-info">
          🛒 {cart.length} | {total} kr
        </span>
      </nav>
    </header>
  );
}

export default Navbar;