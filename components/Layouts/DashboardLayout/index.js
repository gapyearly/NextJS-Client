import Link from "next/link";
import styles from "./Dashboard.module.css";
export default function DashboardLayout({ children }) {
  return <Navbar></Navbar>;
}

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img
        src="/images/lightlogo.png"
        layout="fill"
        alt="Gapyearly Logo"
        className={styles.logo}
      />
      <NavItem href="dashboard/">Community Hub</NavItem>
    </div>
  );
};

const NavItem = ({ href, children }) => {
  return (
    <Link href={href}>
      <div className={styles.navItem}>
        <a>{children}</a>
      </div>
    </Link>
  );
};
