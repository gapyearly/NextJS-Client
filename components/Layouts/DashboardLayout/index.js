import Link from "next/link";
import styles from "./Dashboard.module.css";
import { useAuth } from "@contexts/auth";
import redirect from "nextjs-redirect";
import { HiMail } from "react-icons/hi";
import { FaGlobe } from "react-icons/fa";
import { BsFillChatSquareFill, BsPersonFill } from "react-icons/bs";

import { RiSettings3Fill } from "react-icons/ri";
import { IoMdExit } from "react-icons/io";
import { useRouter } from "next/router";

import { useAlert } from "react-alert";

const Redirect = redirect("/");
const SignupRedirect = redirect("/signup/additional-info");

export default function DashboardLayout({ children }) {
  const { isAuthenticated, loading, user, logout } = useAuth();
  const router = useRouter();
  if (loading) return <div></div>;
  if (!isAuthenticated)
    return (
      <Redirect>
        <div style={{ display: "grid", placeItems: "center" }}>
          <h1>Please sign in . . .</h1>
        </div>
      </Redirect>
    );
  if (!user.signupCompletion) {
    return <SignupRedirect />;
  }
  return (
    <>
      <Navbar logout={logout} />
      <main className={styles.main}>{children}</main>
    </>
  );
}

const Navbar = ({ logout }) => {
  const alert = useAlert();
  return (
    <div className={styles.navbar}>
      <img
        src="/images/lightlogo.png"
        layout="fill"
        alt="Gapyearly Logo"
        className={styles.logo}
      />
      <NavItem href="/dashboard/messaging">
        <HiMail className={styles.navIcon} />
        Messaging
      </NavItem>

      <NavItem href="/dashboard/community">
        <FaGlobe className={styles.navIcon} />
        Community Hub
      </NavItem>
      <NavItem href="/dashboard/submission">
        <BsFillChatSquareFill className={styles.navIcon} />
        Share Your Story
      </NavItem>
      <NavItem href="/dashboard/profile">
        <BsPersonFill className={styles.navIcon} />
        Profile Overview
      </NavItem>

      <NavItem href="/dashboard/settings">
        <RiSettings3Fill className={styles.navIcon} />
        Account Settings
      </NavItem>

      <NavItem
        href="/"
        onClick={() => {
          logout();
          alert.success("Logged out");
        }}
      >
        <IoMdExit className={styles.navIcon} />
        Logout
      </NavItem>
    </div>
  );
};

const NavItem = ({ href, children, onClick }) => {
  return (
    <Link href={href} onClick>
      <div className={styles.navItem} onClick={onClick}>
        <a>{children}</a>
      </div>
    </Link>
  );
};
