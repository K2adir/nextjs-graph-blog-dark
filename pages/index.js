import FeaturedPost from "../components/FeaturedPost";
import Post from "../components/Post";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <section className="lg:py-8 sm:py-6 py-4">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <h1 className="dark:text-neutral-100 text-neutral-800 lg:text-6xl sm:text-4xl text-3xl text-left font-semibold">
          Frus Blog
        </h1>
        <main className="relative">
          <FeaturedPost post={posts.slice(-1)[0].node} />
          <section className="lg:py-20 sm:py-16 py-10">
            <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-0">
              <div className="max-w-md grid grid-cols-1 mx-auto lg:max-w-full md:max-w-2xl md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 md:gap-x-10 gap-x-5 gap-y-12">
                {posts.slice(0, -1).map((post, index) => (
                  <Post post={post.node} key={index} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}
