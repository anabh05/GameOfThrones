import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './personajes.css'

export default function Personajes() {

 
  const [characters, setCharacters] = useState([])

  const getCharacters = () => {
        axios.get("http://localhost:3000/characters")
        // .then(res => res.json())
            .then(data => setCharacters(data.data))

  }

  useEffect(() => { 

    getCharacters()

  }, [])
  console.log(characters)
return (
  <>
    <div className='characters'>
    {characters.map((character, index) => (
      <div className='character' key={index}>
        <div className='character-img'>
          <img src={"/public" + character.image} alt={character.name} />
        </div>
        <h2>{character.name}</h2>
      </div>
    ))}
  </div>
  </>
);

}