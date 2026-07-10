function MenuCard({ pizza }) {
  return (
    <article className="menu-card">
      <img src={pizza.image} alt={pizza.name} />

      <div>
        <h3>{pizza.name}</h3>

        <p>{pizza.description}</p>

        <p>
          <strong>Ingredienser:</strong>
          {" "}
          {pizza.ingredients.join(", ")}
        </p>

        <p>{pizza.price} kr</p>
      </div>
    </article>
  );
}

export default MenuCard;