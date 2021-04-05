import BackgroundImage from "./BackgroundImage";
import Link from "next/link";
import styles from "./SignupLayout.module.css";

export default function Layout({ children }) {
  return (
    <BackgroundImage className="valley">
      <Link href="/">
        <img
          src="/images/logo.png"
          layout="fill"
          alt="Gapyearly Logo"
          className={styles.logo}
        />
      </Link>
    </BackgroundImage>
  );
}
