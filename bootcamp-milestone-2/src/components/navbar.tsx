import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <h1 className={style.logo}>
        <Link href="/">Daniel's Personal Website</Link>
      </h1>
      <ul className={style["nav-list"]}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/resume">Resume</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}