import Link from "next/link";
import styles from "./Button.module.css";

export default function Pill({ color, href, children }) {
  return (
    <button className={`${styles.pill} ${styles[color]}`}>
      <Link href={href}>
        <a className="noUnderline">{children}</a>
      </Link>
    </button>
  );
}
