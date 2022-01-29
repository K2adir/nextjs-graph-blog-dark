import React from "react";

const Title = ({ children }) => {
  return (
    <h1 className="dark:text-neutral-100 text-neutral-800 lg:text-5xl sm:text-4xl text-3xl text-left font-semibold">
      {children}
    </h1>
  );
};

export default Title;
