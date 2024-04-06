import './App.css'
import Home from './pages/home/Home'
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom'
import Personajes from './pages/personajes/Personajes'
import Casas from './pages/casas/Casas'
import Cronologia from './pages/cronologia/Cronologia'
import Personaje from './pages/personajes/personaje/Personaje'
import Casa from './pages/casas/casa/Casa'
import { housesGlobal } from './pages/casas/Casas'



function App({houses, setHouses}) {


  return (
    <>
        <housesGlobal.Provider value={{houses: houses, setHouses: setHouses}}>
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
          <Route path="/casas/:id" element={ <Casa/>}/>
          <Route path="/cronologia" element={<Cronologia />} />
          <Route path="/personajes/:id" element={<Personaje />} />
          

        </Routes>

      </Router>
      
      </housesGlobal.Provider>
    </>
  )
}

export default App
