import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './personajes.css'

export default function Personajes() {

 
  const [characters, setCharacters] = useState([])
  
  const getCharacters = () => {
        axios.get('http://localhost:3000/characters')
        // .then(res => res.json())
            .then(data => setCharacters(data.data))
        
  }

  useEffect(() => { 

    getCharacters()

  }, [])

  return (
  <>
    
  <div className='characters'>
    {characters.map((character, index) => 
      <div className='character' key={index}>
        <div className='character-img'>
          <img src={character.image}></img></div>
      <h3>{character.name}</h3>
      <p>House:{character.house}</p>
      <p>Parents:{character.parents}</p> 
      <p>Siblings:{character.siblings}</p>
    </div>
    )}
  </div>

        
    
      
      
    
  </>
  )
}
