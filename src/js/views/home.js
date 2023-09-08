import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/Card";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const characters = store.characters;

  const planets = store.planets;

  const vehicles = store.vehicles;

  return (
    <div className="container">
      <h2 className="fs-3 mt-2">Characters</h2>
      <div className="d-flex flex-wrap">
        {characters.map((character) => (
          <Card
            key={character.uid}
            name={character.name}
            type="characters"
            id={character.uid}
          />
        ))}
      </div>
      <h2 className="fs-3 mt-4">Planets</h2>
      <div className="d-flex flex-wrap">
        {planets.map((planet) => (
          <Card
            key={planet.uid}
            name={planet.name}
            type="planets"
            id={planet.uid}
          />
        ))}
      </div>
      <h2 className="fs-3 mt-4">Vehicles</h2>
      <div className="d-flex flex-wrap">
        {vehicles.map((vehicle) => (
          <Card
            key={vehicle.uid}
            name={vehicle.name}
            type="vehicles"
            id={vehicle.uid}
          />
        ))}
      </div>
    </div>
  );
};
