import Link from "next/link";

const Post = ({ id, title, body }) => {
  return (
    <div className="postContainer">
      <Link href="/">Go back</Link>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>Post author id: {id}</p>
    </div>
  );
};

export default Post;
