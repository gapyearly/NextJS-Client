import Link from "next/link";
import styles from "./Button.module.css";

export default function Pill({ color, href, children }) {
  const Pill = (
    <button className={`${styles.pill} ${styles[color]}`}>{children}</button>
  );
  const LinkHOC = (children) => {
    return <Link href={href}>{children}</Link>;
  };
  if (href) return LinkHOC(Pill);
  return Pill;
}
