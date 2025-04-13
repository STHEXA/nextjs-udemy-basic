import ClientComponent from "../rcc/page";

export default function ServerComponent() {
  console.log("server");
  return (
    <div>
      サーバー
      <ClientComponent />
    </div>
  );
}
