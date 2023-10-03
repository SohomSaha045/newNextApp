"use client";
import { useRouter } from "next/navigation";
// const useRouter = require('next/navigation');

import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <h1>Hello</h1>
      <button onClick={() => alert("hi")}> Click me </button>
      <br />
      <Link href="/login">Login</Link>
      <br />
      <Link href="/about">About</Link>
      <br />
      <br />
      <button onClick={() => router.push("/login")}>Go to login page</button>
      <br />
      <br />
      <button onClick={() => router.push("/about")}>Go to About page</button>
    </main>
  );
}
