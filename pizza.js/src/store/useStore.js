import { create } from "zustand";

const useStore = create((set) => ({
  menu: [
    {
      id: 1,
      name: "Margherita",
      ingredients: ["Tomatsås", "Mozzarella", "Basilika"],
      price: 119,
    },
    {
      id: 2,
      name: "Hawaii",
      ingredients: ["Tomatsås", "Mozzarella", "Ananas", "Skinka"],
      price: 145,
    },
    {
      id: 3,
      name: "Kebab",
      ingredients: [
        "Tomatsås",
        "Mozzarella",
        "Kebab",
        "Lök",
        "Pommes",
      ],
      price: 139,
    },

  ],

  cart: [],

  addToCart: (pizza) =>
    set((state) => ({
      cart: [...state.cart, pizza],
    })),

    removeFromCart: (indexToRemove) =>
      set((state) => ({
        cart: state.cart.filter((_, index) => index !== indexToRemove),
      })),

  clearCart: () =>
    set({
      cart: [],
    }),
}));

export default useStore;