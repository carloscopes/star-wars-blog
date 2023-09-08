import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const info = (props) => {
  const { actions, store } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getInfo(
      params.type == "characters" ? "people" : params.type,
      params.id
    );
  }, []);

  return (
    <div className="container-fluid">
      <div className="row d-flex flex-row">
        <div className="col-4 border border-info">
          <img
            src={
              params.type == "planets" && params.id == "1"
                ? `https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png`
                : `https://starwars-visualguide.com/assets/img/${params.type}/${params.id}.jpg`
            }
            style={{ width: "10rem", height: "10rem" }}
          />
        </div>
      </div>
      <div className="col-4 border border-success">
        {params.type == "characters" && (
          <>
            <h2>{store.info.name}</h2>
            <h3 className="fs-5">Birth : {store.info.birth_year}</h3>
            <h3 className="fs-5">Gender: {store.info.gender}</h3>
            <h3 className="fs-5">Height: {store.info.height}</h3>
            <h3 className="fs-5">Skin color: {store.info.skin_color}</h3>
            <h3 className="fs-5">Eyes color: {store.info.eye_color}</h3>
          </>
        )}
        {params.type == "planets" && (
          <>
            <h2>{store.info.name}</h2>
            <h3 className="fs-5">Gravity: {store.info.population}</h3>
            <h3 className="fs-5">Climate: {store.info.climate}</h3>
            <h3 className="fs-5">Diameter: {store.info.diameter}</h3>
            <h3 className="fs-5">Surface water: {store.info.surface_water}</h3>
            <h3 className="fs-5">Population: {store.info.population}</h3>
          </>
        )}
        {params.type == "vehicles" && (
          <>
            <h2>{store.info.name}</h2>
            <h3 className="fs-5">Model: {store.info.model}</h3>
            <h3 className="fs-5">Vehicle class: {store.info.vehicle_class}</h3>
            <h3 className="fs-5">Passengers: {store.info.passengers}</h3>
            <h3 className="fs-5">Cost: {store.info.cost_in_credits}</h3>
            <h3 className="fs-5">Length: {store.info.length}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default info;
