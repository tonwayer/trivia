import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import { Home } from './containers/Home'
import { Quiz } from './containers/Quiz'
import { Result } from './containers/Result'

const Routes = () => {
  return <Switch>
    <Route path='/' element={<Home />} />
    <Route path='/quiz' element={<Quiz />} />
    <Route path='/result' element={<Result />} />
  </Switch>
}

export default Routes
