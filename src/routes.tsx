import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import { Home } from './containers/Home'

const Routes = () => {
  return <Switch>
    <Route path='/' element={<Home />} />
  </Switch>
}

export default Routes
