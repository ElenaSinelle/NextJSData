import Input from "./Input/Input";
import Link from "next/link";

export default function Client() {
  return (
    <main>
     <h1> It's Client Page</h1>
     <Input/>
     <Link href="/">Link to main</Link>
     <br/>
     <Link href="/client/basket">Link to basket</Link>
    </main>
  );
}
