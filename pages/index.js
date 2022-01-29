import Title from "../ui/Title";

export default function Home() {
  return (
    <section className="lg:py-8 sm:py-6 py-4">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <Title>Frus Blog</Title>
        <main>
          <div>featured post</div>
          <div>posts</div>
        </main>
      </div>
    </section>
  );
}
