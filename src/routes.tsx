import { Routes as Switch, Route, Navigate } from 'react-router-dom'
import { Home } from './containers/Home'
import { Question } from './containers/Question'
import { Result } from './containers/Result'

const Routes = () => {
  return <Switch>
    <Route path="/" element={<Home />} />
    <Route path="/questions/:id" element={<Question />} />
    <Route path="/result" element={<Result />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Switch>
}

export default Routes
