import Image from "next/image";
import React from "react";
import moment from "moment";
import Link from "next/link";

const FeaturedPost = ({ post }) => {
  return (
    <section className="lg:py-20 sm:py-16 py-10">
      <div className="max-w-7xl sm:mx-auto lg:px-8 sm:px-6 -mx-4">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center lg:items-stretch lg:gap-x-12 gap-x-6 gap-y-5">
          <Link href={`./post/${post.slug}`}>
            <div className="overflow-hidden sm:rounded-xl cursor-pointer">
              <div className="aspect-video min-h-[400px] relative">
                <Image
                  src={post.featuredImage.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Featured Post"
                  priority
                />
              </div>
            </div>
          </Link>
          <div className="flex flex-col px-4 dark:selection:bg-teal-400 selection:bg-teal-700 dark:selection:text-neutral-800 selection:text-neutral-200">
            <p className="dark:text-neutral-300 text-neutral-700 text-sm font-semibold">
              {moment(post.createdAt).format("MMMM DD, YYYY")}
            </p>
            <Link href={`./post/${post.slug}`}>
              <h1 className="lg:text-5xl sm:text-4x text-3xl font-semibold dark:text-neutral-200 text-neutral-800 mt-6 cursor-pointer">
                {post.title}
              </h1>
            </Link>
            <Link href={`./post/${post.slug}`}>
              <p className="mt-10 dark:text-neutral-400 text-neutral-700 text-lg cursor-pointer">
                {post.excerpt}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
