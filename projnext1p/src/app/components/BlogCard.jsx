"use client";
import Link from "next/link"

export default function BlogCard({ blog }) {

    return (
        <>
            <ul>
                <Link href={`/blog/${blog.id}`}>
                    <h3>{blog.id} - {blog.title}</h3>
                </Link>
                <p>{blog.body}</p>
                <button onClick={() => alert("click ejecutandose")}>
                    click
                </button>
            </ul>
        </>
    )
}