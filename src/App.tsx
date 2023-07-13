import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import Header from './components/Header'
import Footer from './components/Footer'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
