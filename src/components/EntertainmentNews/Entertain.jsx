import React from "react";
import { useLoaderData } from "react-router-dom";
import Details from "../EntertainDetailsNews/Details";

const Entertain = () => {
    const EnterTainmentNews = useLoaderData()
    const {articles} = EnterTainmentNews


  return (
    <>
    <h2 className="text-4xl text-center py-7">
        Entertainment news
    </h2>
  <div className="grid grid-cols-3 gap-10 my-10">
    {
        articles.map((article ,id)=> <Details key={id}  article={article}/>)
    }
  </div>
    </>
  );
};

export default Entertain;
