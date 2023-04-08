import React from 'react';

const Details = ({article}) => {
    const {author,content,description,urlToImage} = article
    return (
        <div className="shadow-lg rounded p-4">
        <h1 className="text-2xl font-bold py-3 overflow-hidden">
            Author : {author}
        </h1>
        <img className="w-[100%]" src={urlToImage} alt="" />

        <h3 className="text-lg py-3 font-semibold">{content}</h3>
        <p>
        {description}
        </p>

        <button className="px-7 mt-auto py-3 rounded-md text-gray-900 border">
            Details More
        </button>

    </div>
    );
};

export default Details;