import Head from "next/head";
import React from "react";

const PageHead = () => {
  return (
    <>
      <Head>
        <title>Frus Blog</title>
        <link rel="icon" href="./logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
};

export default PageHead;
