import Image from "next/image";
import Link from "next/link";
import React from "react";
import moment from "moment";

const Post = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="space-y-4 relative">
        <div className="overflow-hidden sm:rounded-xl cursor-pointer">
          <div className="aspect-[4/3] relative">
            <Image
              src={post.featuredImage.url}
              layout="fill"
              objectFit="cover"
              alt="Featured Post"
              priority
            />
          </div>
        </div>
        <span className="dark:text-neutral-300 text-neutral-700 text-xs font-semibold tracking-widest uppercase mt-2 block">
          {moment(post.createdAt).format("MMMM DD, YYYY")}
        </span>
        <h1 className="text-xl font-semibold dark:text-neutral-200 text-neutral-800  cursor-pointer">
          {post.title}
        </h1>
        <p className="dark:text-neutral-400 text-neutral-700  cursor-pointer">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
};

export default Post;
