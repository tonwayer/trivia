import { BrowserRouter } from 'react-router-dom'
import { Layout } from './containers/Layout';

import './App.scss';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
