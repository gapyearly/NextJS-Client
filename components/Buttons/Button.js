import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({ color, href, children }) {
  return (
    <Link href={href}>
      <button className={`${styles[color]} ${styles.clickable}`}>
        {children}
      </button>
    </Link>
  );
}
