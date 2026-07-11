import useStore from "../store/useStore";
import MenuCard from "../components/MenuCard";

function Menu() {
  const menu = useStore((state) => state.menu);

  return (
    <section className="menu-page">
      <h1>Vår meny</h1>

      <div className="menu-grid">
        {menu.map((pizza) => (
          <MenuCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </section>
  );
}

export default Menu;