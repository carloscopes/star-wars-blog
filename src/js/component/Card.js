import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router";

const Card = (props) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div
      className="col-auto card m-2 bg-dark border border-white"
      style={{ width: "12rem" }}
    >
      <img
        src={
          props.type == "planets" && props.id == "1"
            ? `https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png`
            : `https://starwars-visualguide.com/assets/img/${props.type}/${props.id}.jpg`
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title fs-6 text-white">{props.name}</h5>
        <div className="d-flex align-items-center justify-content-between">
          <a
            className="btn btn-primary btn-sm"
            onClick={() => navigate(`/info/${props.type}/${props.id}`)}
          >
            See details
          </a>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm fs-5"
            onClick={() => actions.addFavorite(props)}
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
