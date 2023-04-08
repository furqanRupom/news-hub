import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Politics from "./components/PoliticsNews/Politics";
import Sports from "./components/SportsNews/Sports";
import Entertain from "./components/EntertainmentNews/Entertain";
import SearchNews from "./components/SearchNews/SearchNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://newsapi.org/v2/top-headlines?apiKey=b5efc4d90aba443492156086dc589d02&q=news"
          ),
      },
      {
        path: "politics",
        element: <Politics />,
        loader: () =>
          fetch(
            "https://newsapi.org/v2/top-headlines?apiKey=b5efc4d90aba443492156086dc589d02&q=politics"
          ),
      },
      {
        path: "sports",
        element: <Sports />,
        loader: () =>
          fetch(
            "https://newsapi.org/v2/top-headlines?apiKey=b5efc4d90aba443492156086dc589d02&q=sports"
          ),
      },
      {
        path: "entertain",
        element: <Entertain />,
        loader: () =>
          fetch(
            "https://newsapi.org/v2/top-headlines?apiKey=b5efc4d90aba443492156086dc589d02&q=entertainment"
          ),

      },

      {
        path:"search/:searchNews",
        element:<SearchNews />,
        loader:(({params}) => fetch(`https://newsapi.org/v2/top-headlines?apiKey=b5efc4d90aba443492156086dc589d02&q=${params.searchNews}`))
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
