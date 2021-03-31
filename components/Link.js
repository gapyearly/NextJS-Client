import React from "react";
import Link from "next/link";

export default function newLink({ className, href, children }) {
  return (
    <Link href={href}>
      {typeof Children === "string" ? (
        <a className={className}>{children}</a>
      ) : (
        children
      )}
    </Link>
  );
}
