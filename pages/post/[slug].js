import Image from "next/image";
import React from "react";
import { getPostDetails, getPosts } from "../../services";
import moment from "moment";

const PostDetails = ({ post }) => {
  return (
    <section className="lg:py-10 sm:py-8 py-4">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="border-b pb-4 border-neutral-500 lg:-mx-8 sm:-mx-6 -mx-4">
          <h1 className="lg:text-5xl capitalize text-center sm:text-4x text-3xl font-semibold dark:text-neutral-200 text-neutral-800 mt-6 cursor-pointer">
            {post.title}
          </h1>
          <div className="overflow-hidden cursor-pointer mt-10">
            <div className="aspect-video relative max-h-[500px] mx-auto">
              <Image
                src={post.featuredImage.url}
                layout="fill"
                objectFit="cover"
                alt="Featured Post"
                priority
              />
            </div>
          </div>
          <p className="dark:text-neutral-300 text-neutral-700 text-sm font-semibold text-center mt-2">
            {moment(post.createdAt).format("MMMM DD, YYYY")}
          </p>
          <p className="mt-5 text-center dark:text-neutral-400 text-neutral-700 cursor-pointer">
            {post.excerpt}
          </p>
        </div>
        <div
          className="prose mx-auto mt-12 max-w-none prose-neutral dark:prose-invert prose-h1:text-center dark:prose-a:text-teal-400 prose-a:text-teal-700 prose-img:rounded-2xl dark:prose-pre:bg-teal-700 prose-pre:bg-teal-400 prose-pre:text-neutral-800 dark:prose-pre:text-neutral-200"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </div>
    </section>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
