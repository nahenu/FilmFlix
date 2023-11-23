import React from "react";
import styles from "@/app/styles/common.module.css";
import MovieCard from "../Components/MovieCard";
const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2157eebca8mshc50ee6bd41d1146p19f63fjsnc19e8b197c45",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {main_data.map((currElem) => {
              return <MovieCard key={currElem.id} {...currElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
