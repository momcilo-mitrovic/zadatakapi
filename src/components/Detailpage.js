import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

const Detailpage = () => {
  const [product, setProduct] = useState(undefined)
  let { id } = useParams()
  const history = useHistory()

  async function fetchData() {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProduct(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Product Detail</h1>
      {product && (
        <ul>
          <li>Id:{product.id}</li>
          <li>
            <img src={product.image} alt="#" />
          </li>
          <li>Title:{product.title}</li>
          <li>Price:{product.price}</li>
          <li>Description:{product.description}</li>
        </ul>
      )}
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  )
}

export default Detailpage
