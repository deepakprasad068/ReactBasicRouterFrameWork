import React from "react";
import style from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}> Home Page</h2>
      <p className={style.description}>Welcome to the Home Page</p>
    </div>
  );
};
