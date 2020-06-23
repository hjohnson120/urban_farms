import React, { useState, useEffect } from 'react'
import Tabs from '../components/Tabs'
import { useOktaAuth } from '@okta/okta-react'

const Home = () => {
  const { authState, authService } = useOktaAuth()
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null)
    } else {
      authService.getUser().then(info => {
        setUserInfo(info)
      })
    }
  }, [authState, authService]) // Update if authState changes
  return (
    <div>
      <h1>Welcome to the Farm</h1>
      <Tabs>
        <div label="Recipes">It's a thing</div>
        <div label="The Farm">More things</div>
        <div label="Blog Posts">The last thing.</div>
      </Tabs>
      <div>
        {userInfo && (
          <div>
            <p>Welcome back, {userInfo.name}!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
