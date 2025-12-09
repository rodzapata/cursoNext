"use client"
export const PostCard = ({ post }) => {

  return (
    <div>
      {

        <ul key={post.id}>
          <h3>{post.id} - {post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => ( alert("click ejecutandose") )}>
            click
          </button>
        </ul>

      }
    </div>
  )
}
