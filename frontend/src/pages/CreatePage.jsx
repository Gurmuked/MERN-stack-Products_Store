import React, {useState} from "react";


const Createpage = () => {

  const [newProduct, setNewProduct] = useState({
    name:"",
    price:"",
    image:""
  });

  const handleAddProduct = async() => {
    console.log(newProduct)
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-transparent">
      <h1 className="text-[40px] font-bold text-center mb-8 text-white">Create New Product</h1>
      <form className="bg-gray-950 bg-opacity-40 rounded-lg shadow-lg p-10 w-full max-w-md flex flex-col gap-4">
        <input 
          className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
          placeholder="Product Name" 
          name="name" 
          value={newProduct.name}
          onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
        />
        <input 
          className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
          placeholder="Price" 
          type='number'
          name="price" 
          value={newProduct.price}
          onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
        />
        <input 
          className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
          placeholder="Image URL" 
          name="image" 
          value={newProduct.image}
          onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
        />
        <button 
          type="button" 
          onClick={handleAddProduct}
          className="bg-blue-400 text-white font-semibold py-2 rounded-md hover:bg-blue-500 transition-colors"
        >
          Add Product
        </button>
      </form>
    </section>
  )
}

export default Createpage;

