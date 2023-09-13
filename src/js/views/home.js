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
    <div className="container bg-dark">
      <h2 className="fs-3 mt-2 text-warning">Characters</h2>
      <div className="d-flex overflow-scroll">
        {characters.map((character) => (
          <Card
            key={character.uid}
            name={character.name}
            type="characters"
            id={character.uid}
          />
        ))}
      </div>
      <h2 className="fs-3 mt-4 text-warning">Planets</h2>
      <div className="d-flex overflow-auto">
        {planets.map((planet) => (
          <Card
            key={planet.uid}
            name={planet.name}
            type="planets"
            id={planet.uid}
          />
        ))}
      </div>
      <h2 className="fs-3 mt-4 text-warning">Vehicles</h2>
      <div className="d-flex overflow-auto">
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
