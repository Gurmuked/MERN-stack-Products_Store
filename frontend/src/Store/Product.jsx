import {create} from "zustand";

const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "please provide all fields" };
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();

      if (!res.ok) {
        return { success: false, message: data.message || 'Failed to create product' };
      }

      set((state) => ({ products: [...state.products, data.data] }));

      return { success: true, message: "product created successfully" };
    } catch (err) {
      return { success: false, message: err.message || 'Network error' };
    }
  },
}))

export default useProductStore;