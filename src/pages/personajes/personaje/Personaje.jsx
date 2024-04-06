import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { housesGlobal } from "../../casas/Casas";


export default function Personaje() {
    const {houses} = useContext(housesGlobal)
    const [character, setCharacter] = useState()
    const { id } = useParams();
    const getCharacter = () => {
        axios.get('http://localhost:3000/characters/'+id)
          .then(data => setCharacter(data.data))   
    }
    const pintarCasa =(casa) => {
        if (casa === "Lannister") {
           return "/images/houses/03.webp"
        }
        
    }
        
  useEffect(() => { 
    getCharacter()
  }, [])
    
  return (
      <>
          {character && <div>
              
            <div className='character-img'>
                <img src={"/public" + character.image} alt={character.name} />
              </div>
              {console.log({houses})}
            <h2>{character.name}</h2>
              <h3>House: {character.house}</h3>
              <img src={pintarCasa(character.house)} alt="" />
            <h3>Alliances:</h3>
            <ul>
                {character.alliances}
            </ul>
            <h3>Episodes:</h3>
            <ul>
                {character.episodes.map((episode, episodeIndex) => (
                <li key={episodeIndex}>{episode}</li>
                ))}
            </ul>
            {console.log(character.episodes)}
            <h3>Parents:</h3>
            <ul>
                {character.parents.map((parent, parentIndex) => (
                <li key={parentIndex}>{parent}</li>
                ))}
            </ul>
            <h3>Siblings:</h3>
            <ul>
                {character.siblings.map((sibling, siblingIndex) => (
                <li key={siblingIndex}>{sibling}</li>
                ))}
            </ul>
            <h3>Titles:</h3>
            <ul>
                {character.titles.map((title, titleIndex) => (
                <li key={titleIndex}>{title}</li>
                ))}
            </ul>
          </div>}
    </>
    );
}
