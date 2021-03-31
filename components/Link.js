import React from "react";
import Link from "next/link";

export default function newLink({ href, children }) {
  return (
    <Link href={href}>
      {typeof Children === "string" ? <a>{children}</a> : children}
    </Link>
  );
}
