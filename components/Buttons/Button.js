import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({ buttonColor, buttonLink, children }) {
  return (
    <button className={styles[buttonColor]}>
      <Link href={buttonLink}>
        <a className="noUnderline">{children}</a>
      </Link>
    </button>
  );
}
