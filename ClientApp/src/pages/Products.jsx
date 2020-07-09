import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import axios from 'axios'

const Products = () => {
  const { products, setProducts } = useState([])

  useEffect(() => {
    axios
      .get(`/api/product`)
      .then(resp => {
        setProducts(resp)
        console.log(resp.data)
      })
      .catch(error => console.log({ error }))
  }, [])

  return (
    <div>
      <section></section>
      <section></section>
    </div>
  )
}

export default Products
