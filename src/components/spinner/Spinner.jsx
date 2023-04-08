import React from "react";

const Spinner = () => {
  return (
    <section className=" w-full">
      <div className="animate-spin w-[50px] mx-auto flex h-screen items-center justify-center">
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <rect fill="none" height="256" width="256" />
          <line
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
            x1="128"
            x2="128"
            y1="32"
            y2="64"
          />
          <line
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
            x1="224"
            x2="192"
            y1="128"
            y2="128"
          />
          <line
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
            x1="195.9"
            x2="173.3"
            y1="195.9"
            y2="173.3"
          />
          <line
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
            x1="128"
            x2="128"
            y1="224"
            y2="192"
          />
          <line
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
            x1="60.1"
            x2="82.7"
            y1="195.9"
            y2="173.3"
          />
          <line
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
            x1="32"
            x2="64"
            y1="128"
            y2="128"
          />
          <line
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
            x1="60.1"
            x2="82.7"
            y1="60.1"
            y2="82.7"
          />
        </svg>
      </div>
    </section>
  );
};

export default Spinner;
