import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/settings">Settings</Link></li>
                <li><Link href="/post">Post</Link></li>
                <li><Link href="/blog">Blog</Link></li>
            </ul>
        </nav>
    )
}