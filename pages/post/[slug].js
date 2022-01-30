import Image from "next/image";
import React from "react";
import { getPostDetails, getPosts } from "../../services";

const PostDetails = ({ post }) => {
  console.log(post);
  return (
    <section className="lg:py-10 sm:py-8 py-6">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div>
          <h1 className="lg:text-5xl capitalize text-center mb-10 sm:text-4x text-3xl font-semibold dark:text-neutral-200 text-neutral-800 mt-6 cursor-pointer">
            {post.title}
          </h1>
          <div className="overflow-hidden cursor-pointer">
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
          <p className="mt-5 text-center dark:text-neutral-400 text-neutral-700 cursor-pointer">
            {post.excerpt}
          </p>
        </div>
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
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
