import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({ color, href, type, children }) {
  const Button = (
    <button className={`${styles[color]} ${styles.clickable}`} type={type}>
      {children}
    </button>
  );
  const LinkHOC = (children) => {
    return <Link href={href}>{children}</Link>;
  };
  if (href) return LinkHOC(Button);
  return Button;
}
