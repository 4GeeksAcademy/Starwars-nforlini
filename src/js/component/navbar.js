import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const {store, actions} = useContext(Context)
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Home</span>
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favorites?.map((fav, index) => (
                <li key={index}>
                    {fav}
                    <span onClick={() => actions.removeFavorites(fav)}>  X </span>
                </li>
            ))}



          </ul>
        </div>
      </div>
    </nav>
  );
};