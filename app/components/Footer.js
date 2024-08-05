import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <span>My NextJS Database</span>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </footer>
  );
};

export default Footer;
