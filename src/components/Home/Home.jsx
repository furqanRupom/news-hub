import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BreakingNews from '../BreakingNews/BreakingNews';

const Home = () => {
    const breakingNewsList = useLoaderData()
    const breakingNews  = breakingNewsList.articles
    console.log(breakingNews)

    return (
        <section>
            <h1 className="text-4xl font-bold py-4 text-center">
                top headLines
            </h1>
            <section className="grid grid-cols-3 gap-10">
                    {
                        breakingNews.map((news,id)=> <BreakingNews key={id} news={news} />)
                    }
            </section>

        </section>
    );
};

export default Home;