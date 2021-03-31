import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navlink({ href, children }) {
  return (
    <Link href={href}>
      <a className={styles.dropdownItem}>{children}</a>
    </Link>
  );
}
