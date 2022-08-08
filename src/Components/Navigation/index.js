import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="nav">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/meanings"
      >
        Meanings{" "}
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/synonyms"
      >
        Synonyms
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/antonyms"
      >
        Antonyms
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/images"
      >
        {" "}
        Images
      </NavLink>
    </div>
  );
}
