import React, { useState } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import EditProductCard from './EditProductCard'

const ProductCard = ({ product, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
	<>
	  <div className="bg-gray-800 rounded-md p-0 shadow relative overflow-hidden">
		<img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
		<div className="p-4 flex items-center justify-between">
		  <div>
			<h3 className="mt-0 font-semibold text-lg">{product.name}</h3>
			<p className="text-sky-300">${product.price}</p>
		  </div>
		  <div className="flex items-center gap-2">
			<button onClick={() => setIsEditing(true)} className="bg-white/10 hover:bg-white/20 rounded p-2">
			  <FiEdit className="text-white" />
			</button>
			<button onClick={() => onDelete(product._id)} className="bg-white/10 hover:bg-red-600 rounded p-2">
			  <FiTrash2 className="text-white" />
			</button>
		  </div>
		</div>
	  </div>

	  {isEditing && <EditProductCard product={product} onClose={() => setIsEditing(false)} />}
	</>
  )
}

export default ProductCard
