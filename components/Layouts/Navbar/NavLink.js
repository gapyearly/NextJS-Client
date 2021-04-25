import React from "react";
import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <a>{children}</a>
      {/* {typeof Children === "string" ? <a className={styles.dropdownItem}>{children}</a> : children} */}
      {/* TODO: styles not being applied */}
    </Link>
  );
}
