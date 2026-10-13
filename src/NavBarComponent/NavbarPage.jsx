import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

export const NavbarPage = () => {
  return (
    <nav className={style.container}>
      <Link to="/" className={style.Link}>
        Home
      </Link>
      <Link to="/about" className={style.Link}>
        About
      </Link>
    </nav>
  );
};
