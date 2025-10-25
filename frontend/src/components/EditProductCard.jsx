import React, { useState } from 'react'
import useProductStore from '../Store/Product'

const EditProductCard = ({ product, onClose }) => {
  const updateProduct = useProductStore((s) => s.updateProduct)
  const [values, setValues] = useState({ name: product.name || '', price: product.price || '', image: product.image || '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const handleSubmit = async () => {
    setLoading(true)
    const res = await updateProduct(product._id, { name: values.name, price: Number(values.price), image: values.image })
    setLoading(false)
    if (!res.success) {
      alert(res.message || 'Failed to update')
      return
    }
    alert('product updated successfully')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6 z-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Update Product</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
        </div>

        <div className="flex flex-col gap-3">
          <input name="name" value={values.name} onChange={handleChange} className="bg-transparent border border-gray-700 rounded px-3 py-2 text-white" />
          <input name="price" value={values.price} onChange={handleChange} type="number" className="bg-transparent border border-gray-700 rounded px-3 py-2 text-white" />
          <input name="image" value={values.image} onChange={handleChange} className="bg-transparent border border-gray-700 rounded px-3 py-2 text-white" />

          <div className="flex justify-end gap-3 mt-4">
            <button onClick={onClose} className="px-4 py-2 rounded bg-gray-700">Cancel</button>
            <button onClick={handleSubmit} disabled={loading} className="px-4 py-2 rounded bg-blue-400 text-black">
              {loading ? 'Updating...' : 'Update'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProductCard
