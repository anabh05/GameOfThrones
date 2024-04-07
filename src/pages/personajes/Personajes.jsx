import { useEffect, useState } from 'react'
import axios from 'axios'
import './personajes.css'
import { Link } from 'react-router-dom'

export default function Personajes() {
 
  const [characters, setCharacters] = useState([])

  const getCharacters = () => {

        axios.get('http://localhost:3000/characters/')
            .then(data => setCharacters(data.data))

  }

  useEffect(() => { 

    getCharacters()

  }, [])
  console.log(characters)
return (
  <>


  <div className='characters'>
        {characters.map((character, index) =><Link to={character.id} key={index}> 
      <div className='character' >
        <div className='character-img'>
          <img src={character.image}></img></div>
      <h3>{character.name}</h3>
      <p>House:{character.house}</p>
      <p>Parents:{character.parents}</p> 
      <p>Siblings:{character.siblings}</p>
    </div></Link>
    )}
  </div>
  </>

  )

}