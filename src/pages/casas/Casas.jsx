import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export const housesGlobal = React.createContext()
import './casas.css'
import Languages from "../../components/Languages"


export default function Casas() {
  const [houses, setHouses] = useState()
  const [newHouses, setNewHouses] = useState([]);
  const getHouses = () => {
    axios.get('https://gameof-thrones-json.vercel.app/houses')
      .then(data => setHouses(data.data))
  }

  useEffect(() => {

    getHouses("")

  }, [])

  // const filtrado = (evento) => {
  //     const nombre = evento.target.value
  //     getHouses(nombre)
  //   }
  const filtrado = (evento) => {
    const valorInput = evento.target.value.toLowerCase();
    filtradoCasas(valorInput);
  }

  const filtradoCasas = (valor) => {
    const filteredHouses = houses.filter(character =>
      character.name.toLowerCase().includes(valor)
    );
    setNewHouses(filteredHouses);
  }

  return (

    <>
      <Languages></Languages>
      <div className="filtro">
      <input type='text' onChange={(e) => filtrado(e)} /></div>

      <div>{houses &&
        <div className="casas">
          {newHouses.length === 0 ?
            houses.map((house, index) => <Link to={"/casas/" + house.id } key={index}>
              <div className="casa">
                <div className="casa-img">
                  <img src={house.image} alt={house.name} />
                </div>
                <h3>{house.name}</h3>
               

              </div></Link>
            ) :
            newHouses.map((house, index) => <Link to={"/casas/" + house.id } key={index}>
              <div>
                <div>
                  <img src={house.image} alt={house.name} />
                </div>
                <h2>{house.name}</h2>
                <p></p>

              </div></Link>
            )}
        </div>}
      </div></>
  )
}
