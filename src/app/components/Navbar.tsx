import { CloudIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="py-3 border-b">
        <ul className="flex justify-between items-center mx-auto container">
          <span>
            <Link href="/">
                <h1 className="text-4xl font-sans items-center font-bold flex gap-3">
                    <CloudIcon size={36} />
                    Weatheria</h1>
            </Link>
          </span>
          <span className="flex gap-3">
            <li>
              <Link href="/">Your Location</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </span>
        </ul>
      </nav>
    </>
  );
}
