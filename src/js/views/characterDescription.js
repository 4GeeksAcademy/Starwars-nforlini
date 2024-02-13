import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function CharacterDescription() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getCharacter() {
      let response = await fetch("https://www.swapi.tech/api/people/" + id);
      let data = await response.json();
      setCharacter(data.result.properties);
    }
    getCharacter();
  }, []);

  return (
    <div>
      <h1>{character.name}</h1>
      <div>
        <h6>Birth Year:</h6> <h4>{character.birth_year}</h4> 
      </div>
      <div>
        <h6>Eye Color:</h6> <h4>{character.eye_color}</h4>
      </div>
      <div>
        <h6>Hair Color:</h6> <h4>{character.hair_color}</h4>
      </div>
      <div>
        <h6>Gender:</h6> <h4>{character.gender}</h4>
      </div>
      <div>
        <h6>Mass:</h6> <h4>{character.mass}</h4>
      </div>
      <div>
        <h6>Height:</h6> <h4>{character.height}</h4>
      </div>

      <div>
        <h6>Skin Color:</h6> <h4>{character.skin_color}</h4>
      </div>
      <div>
        <h6>Homeworld:</h6> <h4>{character.planets}</h4>
      </div>  

    </div>
  );
}