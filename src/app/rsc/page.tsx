import Link from "next/link";
import ClientComponent from "../rcc/page";

export default function ServerComponent() {
  console.log("server");
  return (
    <div>
      サーバー
      <ClientComponent />
      <Link href="/about">About</Link>
    </div>
  );
}
