import BackgroundImage from "./BackgroundImage";
import Link from "next/link";
import styles from "./SignupLayout.module.css";

export default function Layout({ children, src }) {
  return (
    <>
      <BackgroundImage className="valley" src={src} />
      <Link href="/">
        <img
          src="/images/logo.png"
          layout="fill"
          alt="Gapyearly Logo"
          className={styles.logo}
        />
      </Link>
      {children}
    </>
  );
}
