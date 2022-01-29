import React from "react";
import Provider from "../context/context";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PageHead from "./PageHead";

const Layout = ({ children }) => {
  return (
    <Provider>
      <PageHead />
      <Navbar />
      <main className="min-h-screen h-full w-full scroll-smooth antialiased dark:bg-neutral-900 bg-neutral-200 dark:selection:bg-teal-400 selection:bg-teal-700 dark:selection:text-neutral-800 selection:text-neutral-200">
        {children}
      </main>
      <Footer />
      <svg
        className="pointer-events-none fixed top-0 left-0 z-50 inline-block h-full w-full translate-y-0 overflow-hidden align-middle opacity-25 brightness-[70%] contrast-[30%] 
      filter"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".85"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>
    </Provider>
  );
};

export default Layout;
