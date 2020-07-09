import React, { useState, useEffect } from 'react'
import Tabs from '../components/Tabs'

const Home = () => {
  return (
    <div>
      <h1 className="header">Welcome to the Farm</h1>
      <Tabs>
        <div label="Recipes">It's a thing</div>
        <div label="The Farm">More things</div>
        <div label="Blog Posts">The last thing.</div>
      </Tabs>
    </div>
  )
}

export default Home
