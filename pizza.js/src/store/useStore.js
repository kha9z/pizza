import { create } from "zustand";

const useStore = create((set) => ({
  menu: [
    {
      id: 1,
      name: "Margherita",
      description: "En klassisk pizza med tomatsås, mozzarella och basilika.",
      ingredients: ["Tomatsås", "Mozzarella", "Basilika"],
      price: 119,
    },
    {
      id: 2,
      name: "JavaScript Special",
      description: "Pepperoni, jalapeño och extra ost.",
      ingredients: ["Tomatsås", "Mozzarella", "Pepperoni", "Jalapeño"],
      price: 145,
    },
    {
      id: 3,
      name: "React Veggie",
      description: "En vegetarisk favorit med grillade grönsaker.",
      ingredients: [
        "Tomatsås",
        "Mozzarella",
        "Paprika",
        "Champinjoner",
        "Oliver",
      ],
      price: 139,
    },
  ],

  addDish: (dish) =>
    set((state) => ({
      menu: [...state.menu, dish],
    })),

  removeDish: (id) =>
    set((state) => ({
      menu: state.menu.filter((dish) => dish.id !== id),
    })),
}));

export default useStore;