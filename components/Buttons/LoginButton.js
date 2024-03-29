import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Button.module.css";

export default function LoginButton({ color, href, children }) {
  const handleClick = () => {};
  return (
    <Link href={href}>
      <button
        className={`${styles[color]} ${styles.clickable}`}
        onClick={handleClick}
      >
        {children}
      </button>
    </Link>
  );
}
