import Link from "next/link";
import styles from "./Dashboard.module.css";
import { useAuth } from "@contexts/auth";
import redirect from "nextjs-redirect";
const Redirect = redirect("/login");

export default function DashboardLayout({ children }) {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <div></div>;
  if (!isAuthenticated)
    return (
      <Redirect>
        <div style={{ display: "grid", placeItems: "center" }}>
          <h1>Please sign in . . .</h1>
        </div>
      </Redirect>
    );
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
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
