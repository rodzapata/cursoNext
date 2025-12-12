import BlogCard from "./BlogCard";

async function LoadBlogs() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    await new Promise((r) => setTimeout(r, 4000)); // simula carga lenta
    console.log(data);
    return data;
}



export default async function Blog() {

    const Blogs = await LoadBlogs();

    return (
        <>
            {Blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </>
    )
}