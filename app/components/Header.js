import Link from "next/link";

const Header = () => {
  return (
    <header>
      <span>My NextJS Database</span>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
