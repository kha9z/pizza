import useStore from "../store/useStore";
import MenuCard from "../components/MenuCard";

function Menu() {
  const menu = useStore((state) => state.menu);

  return (
    <section>
      <h1>Pizza.js Meny</h1>

      {menu.map((pizza) => (
        <MenuCard
          key={pizza.id}
          pizza={pizza}
        />
      ))}
    </section>
  );
}

export default Menu;