import React, { useState, useEffect } from 'react'
import Tabs from '../components/Tabs'
import axios from 'axios'

const Home = () => {
  // useEffect(() => {
  //   userInfo &&
  //     axios
  //       .post('/api/user', {
  //         email: userInfo.email,
  //         FirstName: userInfo.name,
  //       })
  //       .then(resp => {
  //         console.log(resp.data)
  //       })
  //       .catch(error => console.log({ error }))
  // }, [userInfo])

  const deleteUser = () => {
    axios
      .delete('/api/user/1')
      .then(resp => {
        console.log(resp.data)
      })
      .catch(error => console.log({ error }))
  }

  return (
    <>
      <div>
        <h1>Welcome to the Farm</h1>
        <h1>
          <button> LogOut </button>
        </h1>
        <button onClick={deleteUser} placeholder="delete" />
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
