import React from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import Splash from './pages/Splash'
import AdminRouter from './admin/AdminRouter'
import './custom.scss'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/admin" component={AdminRouter} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Layout>
  )
}

export default App
