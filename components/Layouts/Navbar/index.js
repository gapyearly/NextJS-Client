import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div id="navbar" className={styles.navbar}>
        <Link href="/">
          <img
            src="/images/logo.png"
            layout="fill"
            alt="Gapyearly Logo"
            className={styles.logo}
          />
        </Link>
        <NavMenu></NavMenu>
      </div>
    </nav>
  );
}

const NavMenu = () => {
  return <div></div>;
};
const DropDownItem = () => {};
