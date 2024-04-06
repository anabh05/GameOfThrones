import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './cronologia.css'


export default function Cronologia() {
  
  const [characters, setCharacters] = useState([])
  

  const getCharacters = () => {
        axios.get ('http://localhost:3000/characters/')
        // .then(res => res.json())
            .then(data => setCharacters(data.data))
  }
  
  useEffect(() => { 
    getCharacters()
  }, [])


  function ordenarItems(items, ascendente) {
    characters.sort(function (a, b) {
      if (ascendente) {
        return a.age - b.age;
      } else {
        return b.age - a.age;
      }
    });
    // Devuelve los elementos ordenados
    return characters
  }
  
  
// Define el estado inicial del orden y del array de items
const [ascendente, setAscendente] = useState(true);
// const [itemsOrdenados, setItemsOrdenados] = useState(characters);
  
  const handleClick = () => {
  // Cambia el estado de orden dependiendo del estado actual
  setAscendente(!ascendente);
  // Ordena los elementos según el nuevo estado de orden
  const nuevosItems = ordenarItems([...characters], !ascendente);
  // Actualiza el estado del array de items ordenados
  setCharacters(nuevosItems);
};

  


  return (
  <>

  <button type='text' onClick={handleClick}>Edad</button>
      
  <div className='characters-age'>
  {characters.map((character, index) => 
      <div className='character-age' key={index}>
      <h3>{character.age}</h3>
      <h3>{character.name}</h3>
      <div className='character-age_img'>
      <img src={character.image}></img></div>
      
    </div>
    )}
      </div>
      
  </>
    
  )
}
