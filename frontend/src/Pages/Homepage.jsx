import React from 'react'

export const Homepage = () => {
  return (
    <>
    <div>Homepage</div>
    <div>      
      <p className="text-gray-300">
        No products found 😔{" "}
        <a
          href="#"
          className="text-sky-400 hover:underline hover:text-sky-300 transition"
        >
          Create a product
        </a>
      </p>
    </div>
  </>
  )
}

export default Homepage;