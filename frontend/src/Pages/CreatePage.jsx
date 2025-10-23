import { useState } from 'react';
import useProductStore from '../Store/Product.jsx';


const CreatePage = () => {

  	const [newProduct, setNewProduct] = useState({
      name: "",
      price: "",
      image: "",
	  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {

    const { success, message } = await createProduct(newProduct);
    console.log(success, message);

      console.log(newProduct)
   };

  return (
    <section className="bg-gray-900 text-white flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Create New Product</h1>

      <div className="w-full max-w-lg">
        <div className="bg-gray-900 bg-opacity-80 rounded-lg shadow-lg p-8">
          <div className="flex flex-col gap-4">
            <input
              placeholder="Product Name"
              className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-400"
              value={newProduct.name}
							onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />

            <input
              placeholder="Price"
              type="number"
              className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-400"
            	value={newProduct.price}
							onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />

            <input
              placeholder="Image URL"
              className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-400"
              value={newProduct.image}
						  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />

            <button
              type="button"
              className="w-full bg-blue-400 opacity-70 text-black font-semibold py-2 rounded-md"
              onClick={handleAddProduct}>
              Add Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePage;
