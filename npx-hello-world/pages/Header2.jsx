import Link from "next/link";
const Header2 = () => {
  return (
    <h1 className="hi">
      Welcome to <a href="https://nextjs.org">Next.js!</a>
      go to <Link href="/tomato">Tomato!</Link>
    </h1>
  );
};

export default Header2;
