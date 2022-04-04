import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './redux/store'
import { Layout } from './containers/Layout'
import Routes from './routes'

import './App.scss'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
