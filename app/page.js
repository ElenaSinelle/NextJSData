import "./globals.css";
import Link from "next/link";

async function fetchData() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  const data = await res.json();
  return data;
}

export default async function Home() {
  const posts = await fetchData();

  return (
    <main>
      <h1>Posts Database</h1>
      <div className="postsContainer">
        {posts.map(post => (
          <div className="postContainer">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link href={`/post/${post.id}`}>
              Press for detailes
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
