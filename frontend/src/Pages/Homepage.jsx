import React, { useEffect } from 'react'
import useProductStore from '../Store/Product'
import { Link } from 'react-router-dom'

const Homepage = () => {
  const products = useProductStore((s) => s.products)
  const fetchProducts = useProductStore((s) => s.fetchProducts)

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 text-white">
      <h2 className="text-2xl text-sky-400 font-semibold mb-6">Current Products</h2>

      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
          {products.map((p) => (
            <div key={p._id} className="bg-gray-800 rounded-md p-4 shadow">
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded" />
              <h3 className="mt-3 font-semibold">{p.name}</h3>
              <p className="text-sky-300">${p.price}</p>
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
  )
}

export default Homepage