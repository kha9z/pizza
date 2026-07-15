import useStore from "../store/useStore";

function Cart() {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);
  const total = cart.reduce((sum, pizza) => sum + pizza.price, 0);

  return (
    <section className="cart-page">
      <h1>Din kundvagn</h1>

      {cart.length === 0 ? (
        <p>Din kundvagn är tom.</p>
      ) : (
        <>
          {cart.map((pizza, index) => (
            <div className="cart-item" key={index}>
              <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.price} kr</p>
              </div>

            <button onClick={() => removeFromCart(index)}>
            🗑️  
            </button>

            </div>
          ))}

          <h2>Totalt: {total} kr</h2>

          <div className="cart-buttons">
            <button onClick={clearCart}>
              Töm kundvagn
            </button>

            <button>
              Beställ
            </button>

          </div>
        </>
      )}
    </section>
  );
}

export default Cart;