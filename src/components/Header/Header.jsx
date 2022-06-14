import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav class="navbar ">
      <div className="container-links ">
        <Link to="/" className="navbar-brand">
          <img
            src="https://e7.pngegg.com/pngimages/581/573/png-clipart-ninja-holding-red-ninja-laptop-illustration-ninja-computer-programming-learning-study-skills-avatar-heroes-cartoon.png"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          &nbsp;&nbsp;Mi Biografia
        </Link>
        <Link className="navbar-brand" to="/contact">
          Contacto
        </Link>
      </div>
    </nav>
  );
};
