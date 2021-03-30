import Link from "next/link";
import styles from "./Button.module.css";

export default function Pill({ pillColor, pillLink, children }) {
  return (
    <button className={`${styles.pill} ${styles[pillColor]}`}>
      <Link href={pillLink}>
        <a className="noUnderline">{children}</a>
      </Link>
    </button>
  );
}
