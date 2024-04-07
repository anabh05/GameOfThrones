import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Casas() {
  const [houses, setHouses] = useState()

  const [newHouses, setNewHouses] = useState([]);
  const getHouses = () => {
    axios.get('http://localhost:3000/houses')
      .then(data => setHouses(data.data))

  }

  console.log("casas", houses);

  useEffect(() => {

    getHouses("")

  }, [])

  const filtrado = (evento) => {
    // nombre = `${evento.target.value}`
    getHouses(evento.target.value)
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

        </div>}
      </div>
    </>
  )

}
