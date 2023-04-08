import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SearchedNewsDetails from '../SearchedNewsDetails/SearchedNewsDetails';

const SearchNews = () => {
    const searchedNews = useLoaderData()
    console.log(searchedNews)
   const {articles} = searchedNews
    return (
        <>
            <h2 className="text-4xl-font-bold text-center py-3">
                your searched news is here
            </h2>

            <section className="grid max-w-5xl mx-auto">
                {
                    articles.map((article,id) => <SearchedNewsDetails key={id}
                    article={article}/>)
                }
            </section>
        </>
    );
};

export default SearchNews;