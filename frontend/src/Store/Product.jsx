import {create} from "zustand";

const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "please provide all fields" };
    }

    try {
  const res = await fetch("/api/products", {
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
  fetchProducts: async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (!res.ok) {
        return { success: false, message: data.message || 'Failed to fetch products' };
      }
      set({ products: data.data || [] });
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message || 'Network error' };
    }
  },
  
  deleteProduct: async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) {
        return { success: false, message: data.message || 'Failed to delete product' };
      }
      // remove from local store
      set((state) => ({ products: state.products.filter((p) => p._id !== id) }));
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message || 'Network error' };
    }
  },
  updateProduct: async (id, productData) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
      const data = await res.json();
      if (!res.ok) {
        return { success: false, message: data.message || 'Failed to update product' };
      }
      set((state) => ({ products: state.products.map((p) => (p._id === id ? data.data : p)) }));
      return { success: true, data: data.data };
    } catch (err) {
      return { success: false, message: err.message || 'Network error' };
    }
  },
}))

export default useProductStore;