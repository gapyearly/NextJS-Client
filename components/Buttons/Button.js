import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({ color, href, children }) {
  return (
    <button className={styles[color]}>
      <Link href={href}>
        <a className="noUnderline">{children}</a>
      </Link>
    </button>
  );
}
