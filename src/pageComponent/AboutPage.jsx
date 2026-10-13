import { useLoaderData } from "react-router-dom";
import style from "./AboutPage.module.css";

export const AboutPage = () => {
  const data = useLoaderData();

  return (
    <div className={style.container}>
      <h2 className={style.title}>About Page</h2>

      <p className={style.description}>{JSON.stringify(data)}</p>
    </div>
  );
};

export async function aboutLoader() {
  const response = await fetch("YOUR_API_URL");

  if (!response.ok) {
    throw new Response("Failed to load data", {
      status: response.status,
    });
  }

  return response.json();
}
