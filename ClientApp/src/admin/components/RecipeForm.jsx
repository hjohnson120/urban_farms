import React, { useEffect } from 'react'
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from '@material-ui/core'
import axios from 'axios'

const RecipeForm = () => {
  // useEffect(() => {
  //   axios
  //     .post(`/api/product`)
  //     .then(resp => {
  //       console.log(resp.data)
  //     })
  //     .catch(error => console.log({ error }))
  // }, [])

  return (
    <div>
      <InputLabel htmlFor="my-input">Name</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <InputLabel htmlFor="my-input">Description</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <InputLabel htmlFor="my-input">How Many Available</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <InputLabel htmlFor="my-input">Price</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
    </div>
  )
}

export default RecipeForm
