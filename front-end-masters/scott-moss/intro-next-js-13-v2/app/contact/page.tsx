"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>u have reached the contact page</h1>
      <h2>Here is a button.</h2>
      <br></br>
      <button type="button" onClick={() => router.push("/")}>
        Click me to go Home
      </button>
    </div>
  );
}
