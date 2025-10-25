import React, { useEffect, useState } from 'react'
import useProductStore from '../Store/Product'
import { Link, useNavigate } from 'react-router-dom'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

const Homepage = () => {
  const products = useProductStore((s) => s.products)
  const fetchProducts = useProductStore((s) => s.fetchProducts)
  const deleteProduct = useProductStore((s) => s.deleteProduct)


  useEffect(() => {
    fetchProducts()
  }, [])

  const onDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return
    const res = await deleteProduct(id)
    if (!res.success) {
      alert(res.message || 'Failed to delete')
    }
  }

  // Edit modal state
  const updateProduct = useProductStore((s) => s.updateProduct)
  const [isEditing, setIsEditing] = useState(false)
  const [editValues, setEditValues] = useState({ _id: '', name: '', price: '', image: '' })

  const openEdit = (p) => {
    setEditValues({ _id: p._id, name: p.name || '', price: p.price || '', image: p.image || '' })
    setIsEditing(true)
  }

  const handleEditChange = (e) => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value })
  }

  const handleUpdate = async () => {
    const { _id, name, price, image } = editValues
    const res = await updateProduct(_id, { name, price: Number(price), image })
    if (!res.success) {
      alert(res.message || 'Failed to update')
      return
    }
    setIsEditing(false)
  }

  return (
    <>
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-white pb-8 pt-[12vh]">
      <h2 className="text-2xl text-sky-400 font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl">Current Products</h2>

      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {products.map((p) => (
            <div key={p._id} className="bg-gray-800 rounded-md p-0 shadow relative overflow-hidden">
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="mt-0 font-semibold text-lg">{p.name}</h3>
                  <p className="text-sky-300">${p.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => openEdit(p)} className="bg-white/10 hover:bg-white/20 rounded p-2">
                    <FiEdit className="text-white" />
                  </button>
                  <button onClick={() => onDelete(p._id)} className="bg-white/10 hover:bg-red-600 rounded p-2">
                    <FiTrash2 className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-300">
            No products found 😔{' '}
            <Link to="/create" className="text-sky-400 hover:underline hover:text-sky-300 transition">
              Create a product
            </Link>
          </p>
        </div>
      )}
    </section>

    {isEditing && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60" onClick={() => setIsEditing(false)} />
        <div className="relative bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6 z-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Update Product</h3>
            <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-white">✕</button>
          </div>

          <div className="flex flex-col gap-3">
            <input name="name" value={editValues.name} onChange={handleEditChange} className="bg-transparent border border-gray-700 rounded px-3 py-2 text-white" />
            <input name="price" value={editValues.price} onChange={handleEditChange} type="number" className="bg-transparent border border-gray-700 rounded px-3 py-2 text-white" />
            <input name="image" value={editValues.image} onChange={handleEditChange} className="bg-transparent border border-gray-700 rounded px-3 py-2 text-white" />

            <div className="flex justify-end gap-3 mt-4">
              <button onClick={() => setIsEditing(false)} className="px-4 py-2 rounded bg-gray-700">Cancel</button>
              <button onClick={handleUpdate} className="px-4 py-2 rounded bg-blue-400 text-black">Update</button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default Homepage