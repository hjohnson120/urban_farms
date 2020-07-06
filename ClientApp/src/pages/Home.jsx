import React, { useState, useEffect } from 'react'
import Tabs from '../components/Tabs'
import axios from 'axios'

const Home = () => {
  const email = 'hledlie.120@gmail.com'
  useEffect(() => {
    axios
      .get(`/api/user/${email}`)
      .then(resp => {
        console.log(resp.data)
      })
      .catch(error => console.log({ error }))
  }, [])

  return (
    <>
      <div>
        <h1>Welcome to the Farm</h1>
        <Tabs>
          <div label="Recipes">It's a thing</div>
          <div label="The Farm">More things</div>
          <div label="Blog Posts">The last thing.</div>
        </Tabs>
      </div>
    </>
  )
}

export default Home
