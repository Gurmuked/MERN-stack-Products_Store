import { useEffect } from 'react'
import useProductStore from '../Store/Product'
import { Link } from 'react-router-dom'
import ProductCard from '../components/productCard'

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
    alert('product deleted successfully')
  }

  return (
  <>
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 text-white pb-8 pt-[12vh]">
      <h2 className="text-2xl text-sky-400 font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl">Current Products</h2>

      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} onDelete={onDelete} />
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
 </>
  )
}

export default Homepage