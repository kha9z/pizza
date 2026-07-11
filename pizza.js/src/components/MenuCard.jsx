import useStore from "../store/useStore";

function MenuCard({ pizza }) {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <article className="menu-card">
      <div className="menu-card-content">
        <h3>{pizza.name}</h3>

        <p className="ingredients">
          {pizza.ingredients.join(", ")}
        </p>

        <p className="price">{pizza.price} kr</p>

        <button
          className="add-btn"
          onClick={() => addToCart(pizza)}
        >
          Lägg i kundvagn
        </button>
      </div>
    </article>
  );
}

export default MenuCard;