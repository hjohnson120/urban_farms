import React from 'react'
import { Route, Switch } from 'react-router'
import ProductForm from './components/ProductForm'
import { Layout } from '../components/Layout'

const AdminRouter = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/admin/productform" component={ProductForm} />
      </Switch>
    </Layout>
  )
}

export default AdminRouter
