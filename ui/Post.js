import Image from "next/image";
import Link from "next/link";
import React from "react";

const Post = () => {
  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden sm:rounded-xl">
        <div className="aspect-[4/3]">
          <Image
            src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            layout="fill"
            objectFit="cover"
            alt="Featured Post"
          />
        </div>
      </div>
      <span className="inline-flex px-4 py-2 dark:text-neutral-300 text-neutral-700 text-xs font-semibold tracking-widest uppercase">
        29 January, 2022
      </span>
      <p className="text-xl font-semibold dark:text-neutral-200 text-neutral-800">
        How to mange your remote team?
      </p>
      <p className="dark:text-neutral-400 text-neutral-700">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </p>
    </div>
  );
};

export default Post;
