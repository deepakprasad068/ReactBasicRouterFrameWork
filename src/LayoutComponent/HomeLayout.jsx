import { Link, Outlet } from "react-router-dom";
import style from "./HomeLayout.module.css";
import { NavbarPage } from "../NavBarComponent/NavbarPage";
import { FooterPage } from "../Footer/FooterPage";

export const HomeLayout = () => {
  return (
    <div>
      <NavbarPage />
      <main className={style.container}>
        <Outlet />
      </main>
      <footer>
        <FooterPage />
      </footer>
    </div>
  );
};
