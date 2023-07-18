import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cardapios from './pages/Cardapios'

const Rotas = () => (
  <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/profile" element={<Cardapios />}></Route>
  </Routes>
)

export default Rotas
