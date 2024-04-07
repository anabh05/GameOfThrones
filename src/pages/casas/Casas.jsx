import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export const housesGlobal = React.createContext()


export default function Casas() {
  const [houses, setHouses] = useState()
  const getHouses = (nombre) => {
        axios.get('http://localhost:3000/houses?name='+ nombre)
          .then(data => setHouses(data.data))
  }
  
  useEffect(() => { 

    getHouses("")

  }, [])

  const filtrado = (evento) => {
      const nombre = evento.target.value
      getHouses(nombre)
    }
  
  return (
  
    <>
    <input type='text' onChange={(e) => filtrado(e)} className='form-data'></input>
    
    <div>{houses &&
      <div>
        {houses.map((house, index) => <Link key={index} to={house.id}>
          <div>
            <div>
              <img src={house.image} alt={house.name} />
            </div>
            <h2>{house.name}</h2>
            <p></p>

          </div></Link>
        )}
      </div> }
    </div></>
      )
}
