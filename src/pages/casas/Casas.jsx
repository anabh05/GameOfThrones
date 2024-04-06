import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Casas() {
  const [houses, setHouses] = useState()
  const getHouses = () => {
    axios.get('http://localhost:3000/houses')
      .then(data => setHouses(data.data))
  }

  console.log("casas", houses);

  useEffect(() => {

    getHouses()

  }, [])

  return (

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
  )
}
