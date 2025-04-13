"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  console.log("client");
  return (
    <div>
      クライアント
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Link href="/about">About</Link>
      <button onClick={() => router.push("/about")}>About</button>
    </div>
  );
}
