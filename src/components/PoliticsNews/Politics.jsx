import React from "react";
import { useLoaderData } from "react-router-dom";
import PoliticalNewsDetails from "../PoliticalNewsDetails/PoliticalNewsDetails";

const Politics = () => {
  const { articles } = useLoaderData();
  return (
    <>
      <h1 className="text-xl font-bold py-6 text-center">
        political current news here
      </h1>
      <section className="grid grid-cols-3 gap-10">
        {articles.map((article, id) => (
          <PoliticalNewsDetails key={id} article={article} />
        ))}
      </section>
    </>
  );
};

export default Politics;
