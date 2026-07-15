import { NavLink } from "react-router-dom";
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
      <NavLink to="/" className="logo">
        <img src={logo} alt="Pizza.js logo" />
      </NavLink>

      <nav>
        <NavLink to="/">Hem</NavLink>
        <NavLink to="/menu">Meny</NavLink>

      <NavLink to="/cart" className="cart-info">
        🛒 {cart.length} | {total} kr
      </NavLink>

      </nav>
    </header>
  );
}

export default Navbar;