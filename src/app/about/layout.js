'use client';
import Link from "next/link";
import './about.css';
import { usePathname } from "next/navigation";

export default function Layout({children}){
    const pathName=usePathname();
    console.log(pathName);
return (
    <div>
    {
        pathName==="/about/aboutCollege"?
    <Link href="/about">Go back to About Page</Link>:
    <ul className="about-menu">
    <li className="list-style">
    <Link href="/about">
    About
    </Link>
    </li >
    <li className="list-style">
    <Link href="/about/aboutStudent">
    About Student
    </Link>
    </li>
    <li className="list-style">
    <Link href="/about/aboutCollege">
    About College
    </Link>
    </li>
    </ul>
    }
    {
        children
    }
    <h2>end of about</h2>
    </div>
)
}