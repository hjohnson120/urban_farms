import React, { useEffect, useState } from 'react'
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from '@material-ui/core'
import axios from 'axios'

const ProductForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [available, setAvailable] = useState(0)
  const [price, setPrice] = useState(0)

  const addProduct = e => {
    e.preventDefault()
    const updateTypePrice = parseInt(price)
    const updateTypeAvailable = parseInt(available)
    setPrice(updateTypePrice)
    setAvailable(updateTypeAvailable)

    axios
      .post('/api/product', {
        name,
        description,
        available,
        price,
      })
      .then(resp => {
        console.log(resp.data)
      })
  }

  return (
    <div>
      <h1 className="productFormHeader">Add a product to inventory</h1>
      <div className="productForm">
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            id="my-input"
            aria-describedby="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Description</InputLabel>
          <Input
            id="Description"
            aria-describedby="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel>How Many Available</InputLabel>
          <Input
            id="Available"
            aria-describedby="Available"
            type="number"
            value={available}
            onChange={e => setAvailable(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Price</InputLabel>
          <Input
            id="Price"
            value={price}
            type="number"
            required={true}
            onChange={e => setPrice(e.target.value)}
          />
        </FormControl>
        <button className="addProductBtn" onClick={addProduct}>
          Add Product
        </button>
      </div>
    </div>
  )
}

export default ProductForm
