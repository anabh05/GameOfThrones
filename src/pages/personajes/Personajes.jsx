import { useEffect, useState } from 'react'
import axios from 'axios'
import './personajes.css'
import { Link } from 'react-router-dom'
import Filtro from '../../components/Filtro'

export default function Personajes() {
 
  const [characters, setCharacters] = useState([])

  const getCharacters = () => {
        axios.get('http://localhost:3000/characters/')
        // .then(res => res.json())
            .then(data => setCharacters(data.data))

  }

  useEffect(() => { 

    getCharacters()



  }, [])
  

   const [data, setData] = useState()

  const filtrado = (evento) => {

      // const valorInput = evento.target.value
      setData(evento.target.value)
  
      filtradoPersonajes(data)
  }
  
  const [newCharacters, setNewCharacters]  =  useState(undefined)

  const filtradoPersonajes = (valor) => {
    // const data2 = characters.filter(characters => characters.name.toLowerCase() == valor.toLowerCase())
       characters.name.toLowerCase().includes(valor).toLowerCase()

    setNewCharacters(data)


    
  }
    // if (valor === undefined) {
    // // console.log(valor)
    // // const data2 = characters.filter(characters => characters.name == valor)
    //   // setNewCharacters(data2)
    //   setNewCharacters([...characters])
    
    // // console.log(data2)
    //   console.log(newCharacters)
    // } else {
    //   const data2 = characters.filter(characters => characters.name == valor)
    //   setNewCharacters(data2)
    
    
    

  
  
return (
  <>

        
  <input type='text' onChange={(e) => filtrado(e)} className='form-data'></input>
    
  <div className='characters'>
        { newCharacters === undefined ? characters.map((character, index) =><Link to={character.id} key={index}> 
      <div className='character' >
        <div className='character-img'>
          <img src={character.image}></img></div>
      <h3>{character.name}</h3>
      <p>House:{character.house}</p>
      <p>Parents:{character.parents}</p> 
      <p>Siblings:{character.siblings}</p>
    </div></Link>
      ) : newCharacters.map((character, index) => <Link to={character.id} key={index}> 
      <div className='character' >
        <div className='character-img'>
          <img src={character.image}></img></div>
      <h3>{character.name}</h3>
      <p>House:{character.house}</p>
      <p>Parents:{character.parents}</p> 
      <p>Siblings:{character.siblings}</p>
    </div></Link> )} 
  </div>
  </>

  )
}