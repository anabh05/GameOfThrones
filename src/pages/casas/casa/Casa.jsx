import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";



export default function Casa() {
    const [house, setHouse] = useState()
    const { id } = useParams();
    const getHouse = () => {
        axios.get('http://localhost:3000/houses/'+ id)
          .then(data => setHouse(data.data))   
    }
    
        
  useEffect(() => { 
    getHouse()
  }, [])
    
  return (
    
    <>
      
    <input type='text' onChange={(e) => filtrado(e)} className='form-data'></input>

          {house && <div>
              {console.log(house)}
              <div>
                  <div>
                    <img src={house.image} alt={house.name} /> 
                  </div>
                  <h2>{house.name}</h2>
              </div>
              <div>
                  <div>
                      <h3>SEDE</h3>
                      <p>{house.settlement}</p>
                  </div>
                  <div>
                    <h3>REGION</h3>
                    <p>{house.region}</p>
                  </div>
                  <div>
                    <h3>ALIANZAS</h3>
                      {house.alliances.map((alliance, i) =>
                          <p key={i}>{alliance} </p>
                      )}
                  </div>
                  <div>
                    <h3>RELIGION</h3>
                    {house.religions.map((religion, i) =>
                          <p key={i}>{religion} </p>
                      )}
                  </div>
                  <div>
                      <h3>FUNDACION</h3>
                    <p>{house.foundation}</p>
                  </div>
                  <div>

                  </div>
              </div>
          </div>}
    </>
    );
}
