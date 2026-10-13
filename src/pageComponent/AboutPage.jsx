import { useLoaderData } from "react-router-dom";
import style from "./AboutPage.module.css";

export const AboutPage = () => {
  const data = useLoaderData();

  return (
    <div className={style.container}>
      <h2 className={style.title}>About Page</h2>

      <p className={style.description}>{data}</p>
    </div>
  );
};

export function aboutLoader() {
  return "Welcome to the About Page";
}
