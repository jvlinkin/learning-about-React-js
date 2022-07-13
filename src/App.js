import './App.css'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import NavBar from './components/layouts/NavBar'
import Footer from './components/layouts/Footer'

function App(){


  return(

    <div>
      <Router>
       <NavBar/>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/empresa" element={<Empresa/>}></Route>
          <Route path="/contato" element={<Contato/>}></Route>
      </Routes>
      </Router>
      <Footer/>
      
    </div>
  )
}

export default App