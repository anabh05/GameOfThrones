import './App.css'
import Home from './pages/home/Home'
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom'
import Personajes from './pages/personajes/Personajes'
import Casas from './pages/casas/Casas'
import Cronologia from './pages/cronologia/Cronologia'
import Personaje from './pages/personajes/personaje/Personaje'


function App() {



  return (
    <>
        
        <Router>
        <header className='header'>

            <nav className='nav'>
              <Link className='a' to="/">Home</Link>
              <Link className='a' to="/personajes">Personajes</Link>
              <Link className='a' to="/casas">Casas</Link>
              <Link className='a'to ="/cronologia">Cronologia</Link>
            </nav>
        </header>

        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/personajes" element={ <Personajes/>}/>
          <Route path="/casas" element={ <Casas/>} />
          <Route path="/cronologia" element={<Cronologia />} />
          <Route path="/personajes/:id" element={ <Personaje/>}/>
          

        </Routes>

      </Router>
      
      
    </>
  )
}

export default App
