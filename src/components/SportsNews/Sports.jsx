import React from "react";
import { useLoaderData } from "react-router-dom";
import SportsDetails from "../SportsDetails/SportsDetails";

const Sports = () => {
  const { articles } = useLoaderData();

  return (
    <>
      <h1 className="text-xl font-bold text-center py-6">Sports news</h1>

      <section className="grid grid-cols-3 gap-10">
        {articles.map((article, id) => (
          <SportsDetails key={id} article={article} />
        ))}
      </section>
    </>
  );
};

export default Sports;
