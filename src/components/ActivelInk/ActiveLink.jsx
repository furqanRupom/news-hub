import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({to,children}) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "bg-gray-900 text-white p-3 rounded-md font-bold" : " "
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
