import { Suspense } from "react";
import Blog from "@/app/components/Blog";
import SkeletonPosts from "@/app/components/SkeletonPosts";

export default async function BlogPage({params}) {
    const { blogId } = await params;
    return (
        <>
            <h1>Publicación {blogId}</h1>

            <Suspense fallback={<SkeletonPosts />}>
                <Blog />
            </Suspense>
        </>
    )
}