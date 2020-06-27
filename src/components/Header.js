import React from "react";
import Photo from "../assets/profile.png";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css"

export default function Header() {
  const HOME_PATH = "/";
  const WEB_DEVELOPMENT_PATH = "/web-development";
  const DATA_SCIENCE_PATH = "/data-science";

  const location = useLocation();
  const pathName = location.pathname;

  return (
    <nav className="navbar">
      {/* TODO: Add a toggle button for mobile */}
      <div className="nav-items-container">
        <ul className="nav-item-list">
          <Link
            className={`nav-item ${pathName === HOME_PATH ? "active" : null}`}
            to={HOME_PATH}
          >
            Home
          </Link>
          <Link
            className={`nav-item ${
              pathName === WEB_DEVELOPMENT_PATH ? "active" : null
            }`}
            to={WEB_DEVELOPMENT_PATH}
          >
            Web
          </Link>
          <Link
            className={`nav-item ${
              pathName === DATA_SCIENCE_PATH ? "active" : null
            }`}
            to={DATA_SCIENCE_PATH}
          >
            Data Science
          </Link>
        </ul>
      </div>

      <div className="nav-photo-container">
        <img alt="profile" src={Photo} />
      </div>
    </nav>
  );
}
