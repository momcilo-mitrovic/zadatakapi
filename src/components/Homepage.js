import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Homepage = () => {
  const [products, setProducts] = useState([])

  async function fetchData() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      setProducts(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link to={`/products/${product.id}`}>
              {product.id} {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Homepage
