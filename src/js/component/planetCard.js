import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

export default function PlanetCard() {
    const [planets, setPlanets] = useState([])
    const {store, actions} = useContext(Context)
    useEffect(() => {
        async function getPlanets() {
            let response = await fetch("https://www.swapi.tech/api/planets")
            let data =  await response.json()
            setPlanets(data.results)
            console.log(data.results)
        }
        getPlanets()
    }, [])
    const handleFavorites = (item) => {
        if(store.favorites.includes(item)){
            actions.removeFavorites(item)
        }
        else {
            actions.addFavorites(item)
        }
    }
  return (
    <div className='d-flex col-10 mx-auto overflow-auto'>
        {planets?.map((planet, index) => (
            <div key={index} className="card" style={{"minWidth": "18rem"}}>
            <img src="https://reviewsyouread.files.wordpress.com/2021/03/10-more-star-wars-planets-as-countries.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <Link to={"planet/"+ planet.uid} className="btn btn-primary">Learn More</Link>
              <button onClick={() => handleFavorites(planet.name)}>💖</button>
            </div>
          </div>
        ))}
    </div>
  )
}