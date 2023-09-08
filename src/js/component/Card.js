import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router";

const Card = (props) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
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
        <h5 className="card-title">{props.name}</h5>
        <a
          className="btn btn-primary"
          onClick={() => navigate(`/info/${props.type}/${props.id}`)}
        >
          See details
        </a>
      </div>
    </div>
  );
};

export default Card;
