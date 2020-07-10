import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Recipe = () => {
  const [recipes, setRecipes] = useState([])
  const [steps, setSteps] = useState([])

  useEffect(() => {
    axios
      .get('/api/recipe')
      .then(resp => {
        setRecipes(resp.data)
        axios.get('/api/recipeStep').then(resp => {
          setSteps(resp.data)
          console.log(steps)
        })
      })
      .catch(error => console.log({ error }))
  }, [])

  console.log(recipes)

  return (
    <div>
      <section>
        <h1>
          {recipes.map(recipe => {
            return (
              <section>
                <div>{recipe.title}</div>
                <div>{recipe.description}</div>
              </section>
            )
          })}
        </h1>
      </section>
    </div>
  )
}

export default Recipe
