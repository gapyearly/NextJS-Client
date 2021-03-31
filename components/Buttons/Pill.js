import Link from "next/link";
import styles from "./Button.module.css";

export default function Pill({ color, link, children }) {
  return (
    <button className={`${styles.pill} ${styles[color]}`}>
      <Link href={link}>
        <a className="noUnderline">{children}</a>
      </Link>
    </button>
  );
}
