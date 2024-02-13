import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function PlanetView() {
  const [planet, setPlanets] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getPlanets() {
      let response = await fetch("https://www.swapi.tech/api/planets/" + id);
      let data = await response.json();
      setPlanets(data.result.properties);
      console.log(id)
    }
    getPlanets();
  }, []);

  return (
    <div>
      <h1>{planet.name}</h1>
      <div>
        <h6>Climate:</h6> <h4>{planet.climate}</h4>
      </div>
      <div>
        <h6>Diameter:</h6> <h4>{planet.diameter}</h4>
      </div>
      <div>
        <h6>Gravity:</h6> <h4>{planet.gravity}</h4>
      </div>
      <div>
        <h6>Population:</h6> <h4>{planet.population}</h4>
        </div>
      <div>
        <h6>Orbital Period:</h6> <h4>{planet.orbital_period}</h4> 
    </div>
    
    <div>
        <h6>Rotation Period:</h6> <h4>{planet.rotation_period}</h4>
        </div>
    <div>
        <h6>Surface Water:</h6> <h4>{planet.surface_water}</h4>
        </div>  
    <div>
        <h6>Terrain:</h6> <h4>{planet.terrain}</h4>
        </div>
    </div>
  );
}