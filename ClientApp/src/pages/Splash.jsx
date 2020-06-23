import React, { useState, useEffect } from 'react'
import { useOktaAuth } from '@okta/okta-react'

const Splash = () => {
  const { authState, authService } = useOktaAuth()
  const login = () => authService.login('/home')
  const [userInfo, setUserInfo] = useState(null)

  if (authState.isPending) {
    return <div>Loading authentication...</div>
  } else if (!authState.isAuthenticated) {
    return (
      <div>
        <a onClick={login}>Login</a>
      </div>
    )
  }

  return (
    <div>
      <h1>Welcome to the Farm</h1>
    </div>
  )
}

export default Splash
