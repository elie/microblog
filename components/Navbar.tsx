import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="nav justify-content-center nav-pills">
        <Link href="/" className="nav-link text-white">Blog</Link>
        <Link href="/new" className="nav-link text-white">Add a new post</Link>
      </nav>
    </>
  );

}
