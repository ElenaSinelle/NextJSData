import Post from "@/app/components/Post";

export async function generateStaticParams() {
  // Получаем список всех возможных id для постов
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  const posts = await res.json();

  // Возвращаем массив объектов с параметрами id
  return posts.map(post => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({
  params,
  searchParams,
}) {
  const post = await fetchPost(params.id);
  return {
    title: post.title,
    description: post.body,
  };
}

async function fetchPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  const data = await res.json();
  return data;
}

async function postPage({ params: { id } }) {
  const post = await fetchPost(id);
  return (
    <main>
      <Post key={id} {...post} />
    </main>
  );
}

export default postPage;
