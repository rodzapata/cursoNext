import Post from "../page";
import { Suspense } from "react";
import SkeletonPosts from "@/app/components/SkeletonPosts";

async function loadPost(id) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await resp.json()
    return data;
}


export default async function Page({ params }) {
    const { postId } = await params;

    const post = await loadPost(postId);

    return (
        <>
            <h2>post {postId} - {post.title}</h2>
            <p>{post.body}</p>

            <h1>Otras publicaciones</h1>
            <hr />
            <Suspense fallback={<SkeletonPosts />}>
                <Post />
            </Suspense>

        </>
    )
}

