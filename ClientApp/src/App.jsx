import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import Splash from './pages/Splash'
import './custom.scss'
import { Security, LoginCallback } from '@okta/okta-react'

const CALLBACK_PATH = '/implicit/callback'

const config = {
  clientId: '0oagpexpte2c0gmjw4x6',
  issuer: 'https://dev-339391.okta.com/oauth2/default',
  redirectUri: 'http://localhost:3000/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
}

const App = () => {
  return (
    <Layout>
      <Security {...config}>
        <Switch>
          <Route path={CALLBACK_PATH} component={LoginCallback} />
          <Route exact path="/" component={Splash} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Security>
    </Layout>
  )
}

export default App
