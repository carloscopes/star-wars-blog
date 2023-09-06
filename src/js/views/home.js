import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/Card";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const characters = store.characters;

  return (
    <div className="text-center mt-1 flex flex-col items-center">
      <h1 className="font-bold text-3xl">Contact List</h1>
      {characters.map((character) => (
        <Card key={character.uid} name={character.name} />
      ))}
    </div>
  );
};
