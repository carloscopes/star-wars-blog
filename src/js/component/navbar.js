import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const favorites = store.favorites;

  console.log(favorites);

  return (
    <nav className="navbar navbar bg-light mx-5 mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Star Wars Blog</span>
      </Link>
      <div className="dropdown dropstart">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
          <span className="bg-light">{favorites.lenght}</span>
        </button>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
