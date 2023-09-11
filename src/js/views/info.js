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
    <div className="container">
      <div className="row d-flex flex-row bg-info">
        <div className="col-lg-3 bg-warning justify-content-center">
          <img
            src={
              params.type == "planets" && params.id == "1"
                ? `https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png`
                : `https://starwars-visualguide.com/assets/img/${params.type}/${params.id}.jpg`
            }
            className="rounded-3 img-fluid"
            style={{ width: "20rem", height: "20rem" }}
          />
        </div>

        <div className="col-lg-9">
          {params.type == "characters" && (
            <>
              <h2 className="text-primary">{store.info.name}</h2>
              <p>
                He was a young man with a dream of becoming a Jedi Knight. He
                had always felt a strong connection to the Force, the mysterious
                energy that binds the galaxy together. He had trained with his
                mentor, a wise and powerful Jedi Master, who taught him the ways
                of the light side and the dangers of the dark side. He had also
                made friends with other aspiring Jedi, who shared his passion
                and curiosity for the galaxy.
                <br /> <br />
                But his destiny was not as simple as he had hoped. He soon found
                himself in the middle of a galactic conflict, where he had to
                face enemies, challenges, and temptations. He had to make
                difficult choices, sometimes risking his life and his morals. He
                had to learn that being a Jedi was not only about wielding a
                lightsaber and using the Force, but also about courage,
                compassion, and balance. He had to discover who he really was,
                and what he was willing to fight for.
              </p>
              <h5>Birth: {store.info.birth_year}</h5>
              <h5>Gender: {store.info.gender}</h5>
              <h5>Height: {store.info.height}</h5>
              <h5>Skin color: {store.info.skin_color}</h5>
              <h5>Eyes color: {store.info.eye_color}</h5>
            </>
          )}
          {params.type == "planets" && (
            <>
              <h2 className="text-primary">{store.info.name}</h2>
              <p>
                It was a world of contrasts, where ancient ruins and futuristic
                cities coexisted. It was a hub of commerce and culture, where
                beings from different species and backgrounds mingled and
                traded. It was a place of opportunity and adventure, where
                anyone could find their fortune or their doom. It was also a
                planet of secrets, where hidden forces and factions plotted and
                schemed. It was a world that attracted the attention of both the
                Republic and the Empire, who vied for its allegiance and
                resources.
                <br /> <br />
                But it was also a world of beauty, where nature and art
                flourished. It had diverse landscapes, from lush forests and
                mountains to barren deserts and oceans. It had a rich history,
                from ancient civilizations and legends to modern innovations and
                achievements. It had a vibrant culture, from music and festivals
                to religion and philosophy. It was a place where the Force was
                strong, where light and dark clashed and balanced. It was a
                world that inspired awe and wonder, where anyone could discover
                something new or old.
              </p>
              <h5>Gravity: {store.info.population}</h5>
              <h5>Climate: {store.info.climate}</h5>
              <h5>Diameter: {store.info.diameter}</h5>
              <h5>Surface water: {store.info.surface_water}</h5>
              <h5>Population: {store.info.population}</h5>
            </>
          )}
          {params.type == "vehicles" && (
            <>
              <h2 className="text-primary">{store.info.name}</h2>
              <p>
                It was a marvel of engineering, a machine that could traverse
                any terrain and withstand any environment. It was a weapon of
                war, a device that could unleash devastating firepower and evade
                enemy attacks. It was a mode of transport, a contraption that
                could carry passengers and cargo across vast distances. It was
                also a vehicle of exploration, a gadget that could explore new
                worlds and discover new wonders. It was a machine that served
                many purposes and functions, depending on the needs and
                preferences of its owner.
                <br /> <br />
                But it was also a vehicle of expression, a machine that
                reflected the personality and style of its driver. It had unique
                features, from custom paint and decals to modified engines and
                weapons. It had a distinctive sound, from roaring thrusters and
                blasters to beeping droids and radios. It had a special bond,
                from loyal companionship and trust to quirky humor and sarcasm.
                It was a machine that had a life of its own, where technology
                and spirit merged. It was a vehicle that inspired passion and
                loyalty, where anyone could find their joy or their challenge.
              </p>
              <h5>Model: {store.info.model}</h5>
              <h5>Vehicle class: {store.info.vehicle_class}</h5>
              <h5>Passengers: {store.info.passengers}</h5>
              <h5>Cost: {store.info.cost_in_credits}</h5>
              <h5>Length: {store.info.length}</h5>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default info;
