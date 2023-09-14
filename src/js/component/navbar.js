import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Logo from "../../img/starwars-icon.png";

/*Acá no logro corregir*/

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const favorites = store.favorites;

  return (
    <nav className="navbar navbar bg-dark mx-5 mb-3">
      <Link to="/">
        <img src={Logo} className="navbar-brand my-0 ms-5 py-0" />
      </Link>
      <div className="btn-group">
        <button type="button" className="btn btn-warning">
          Favorites
          <span className="bg-dark rounded-1 ms-1 p-1 text-white text-center">
            {favorites.length}
          </span>
        </button>

        <button
          type="button"
          className="btn btn-warning dropdown-toggle dropdown-toggle-split"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>

        <ul className="dropdown-menu d-flex flex-column bg-secondary">
          {favorites.map((favorite, uid) => (
            <li
              key={uid}
              className="mx-2 d-flex text-white justify-content-between"
            >
              <p>{favorite}</p>
              <svg
                onClick={() => actions.deleteFavorite(favorite)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                style={{ width: "1.2rem", height: "1.2rem", cursor: "pointer" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
