import Image from "next/image";
import React from "react";

const FeaturedPost = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-10">
      <div className="max-w-7xl sm:mx-auto lg:px-8 sm:px-6 -mx-4">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center lg:items-stretch lg:gap-x-12 gap-x-6 gap-y-5">
          <div className="relative overflow-hidden sm:rounded-xl">
            <div className="aspect-[4/3] min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                layout="fill"
                objectFit="cover"
                alt="Featured Post"
              />
            </div>
          </div>
          <div className="flex flex-col px-4 dark:selection:bg-teal-400 selection:bg-teal-700 dark:selection:text-neutral-800 selection:text-neutral-200">
            <p className="dark:text-neutral-300 text-neutral-700 text-sm font-semibold">
              January 29, 2022
            </p>
            <h1 className="lg:text-5xl sm:text-4x text-3xl font-semibold dark:text-neutral-200 text-neutral-800 mt-6">
              Tentang Creativity Block pada UI Designer
            </h1>
            <p className="mt-10 dark:text-neutral-400 text-neutral-700 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus at placeat consequuntur esse quae et voluptatibus
              velit tempora incidunt nobis?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
