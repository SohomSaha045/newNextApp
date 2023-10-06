"use client";
import { useRouter } from "next/navigation";
import style from "@/styles/outside.module.css";
import cond from "@/styles/conditional.module.css";
// const useRouter = require('next/navigation');

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [color,setColor]=useState('brown');
  const router = useRouter();
  return (
    <main>
      <h1>Hello</h1>
      <button onClick={() => alert("hi")}> Click me </button>
      <br />
      <Link href="/login" className={style.out}>Login</Link>
      <br />
      <Link href="/about" className={color=='brown'?cond.purple:cond.brown}>About</Link>
      <br />
      <br />
      <button onClick={() => router.push("/login")}>Go to login page</button>
      <br />
      <br />
      <button onClick={() => router.push("/about")}>Go to About page</button>
      <br />
      <br />
      <button onClick={() =>{color=='brown'?setColor('purple'):setColor('brown')}}>Change Color</button>
    </main>
  );
}
