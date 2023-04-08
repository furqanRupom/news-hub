import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../spinner/spinner';
import ActiveLink from '../ActivelInk/ActiveLink';

const Header = () => {
    const [value,setValue] = useState("")
    const handleValue = (e) =>{
    setValue(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const navigate = useNavigate()
    const searchComponents = () =>{
        navigate(`/search/${value}`)
    }
    return (
        <>
            <header className="flex items-center justify-between py-3 px-2 bg-gray-400/25 mb-24">
                <h1 className="text-3xl font-bold">
                    News Hub
                </h1>

                <nav>
                    <ul className="flex space-x-5 items-center">
                        <ActiveLink to={"/"}>Home</ActiveLink>
                        <ActiveLink to={"/politics"}>Politics</ActiveLink>
                        <ActiveLink to={"/sports"}>sports</ActiveLink>
                        <ActiveLink to={"/entertain"}>entertain</ActiveLink>
                    </ul>
                </nav>

                <form onSubmit={handleSubmit} className="flex space-x-4">
                    <input onChange={(e)=>handleValue(e)} className="px-2 py-1 border border-slate-900  rounded-lg focus:outline-slate-900 focus:border-0 outline-none" type="text" />
                    <button onClick={searchComponents} type='submit' className="bg-slate-900 text-white px-3 py-1 rounded">
                        Search
                    </button>
                </form>


            </header>
        </>
    );
};

export default Header;