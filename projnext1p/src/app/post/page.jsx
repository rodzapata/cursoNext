import { PostCard } from "../components/PostCard";

async function LoadPosts() {
  let ruta = "https://jsonplaceholder.typicode.com/posts"
  const res = await fetch(ruta);
  const data = await res.json();
  return data;

}

const Post = async () => {
  const posts = await LoadPosts();

  return (
    <div>
      {
        posts.map((post) => (
          <PostCard post={post} key={post.id}></PostCard>
        )
        )
      }
    </div>
  )
}

export default Post