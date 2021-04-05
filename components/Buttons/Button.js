import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({ color, href, type, children }) {
  return (
    <Link href={href}>
      <button className={`${styles[color]} ${styles.clickable}`} type={type}>
        {children}
      </button>
    </Link>
  );
}
