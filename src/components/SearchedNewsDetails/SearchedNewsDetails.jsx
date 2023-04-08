import React from 'react';

const SearchedNewsDetails = ({article,id}) => {
    const { author, content, description, urlToImage,title} = article;
    return (

        <div className="shadow-xl rounded p-4 ">
          <h1 className="text-2xl font-bold py-3 overflow-hidden flex-flex-col space-y-6"> {author}
          </h1>
          <p className="py-5">
          <span className="text-xl font-bold px-4">News title :</span>
          {title}
          </p>
          <img className="w-[100%] mx-auto" src={urlToImage} alt="" />

          <h3 className="text-lg py-3 font-semibold">{content}</h3>
          <p className=""><span className="text-xl font-bold px-4">News Disc :</span>{description}</p>

          <button className="px-7 mt-5  w-1/2 py-3 rounded-md text-white font-bold bg-gray-900 ring ring-slate-900">
            Details More
          </button>
        </div>

    );
};

export default SearchedNewsDetails;