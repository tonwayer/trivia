import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import { Home } from './containers/Home'
import { Quiz } from './containers/Quiz'

const Routes = () => {
  return <Switch>
    <Route path='/' element={<Home />} />
    <Route path='/quiz' element={<Quiz />} />
  </Switch>
}

export default Routes
