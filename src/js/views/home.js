import React from "react";
import CharacterCard from "../component/characterCard";
import "../../styles/home.css";
import PlanetCard from "../component/planetCard"

export const Home = () => (
    <div className="text-center mt-5">
        <CharacterCard />
		<PlanetCard />
    </div>
);